import { Web3Button } from "@web3modal/react";
import { useState, useEffect, useMemo } from "react";
import {
    useAccount,
    useContractWrite,
    useBalance,
    useWaitForTransaction,
    useContractRead,
} from "wagmi";

import BigNumber from "bignumber.js";

import { useUSDT } from "../hooks/useUSDT";
import { usePresale } from "../hooks/usePresale";

import { ConfirmAllowance } from "../components/ConfirmAllowance";

export default function HomePage() {
    const { address, isConnected } = useAccount();

    const TokenUSDTAddress = useUSDT();
    const TokenPresaleAddress = usePresale();

    const { data: balanceData, refetch: refetchBalance } = useBalance({
        address,
        token: process.env.NEXT_PUBLIC_UMC_CONTRACT_ADDRESS, //token address UMC
    });
    const balanceUMC = balanceData?.formatted;

    const { data: tokenWeiPrice } = useContractRead({
        ...TokenPresaleAddress,
        functionName: "tokenPerUSDT",
    });

    const tokenPrice = useMemo(() => {
        if (tokenWeiPrice == null) {
            return 0;
        } else {
            const tokenPerUSDT = new BigNumber(tokenWeiPrice).dividedBy(10 ** 12);
            return new BigNumber(1).dividedBy(tokenPerUSDT.toString()).toString();
        }
    }, [tokenWeiPrice]);

    // Inputs
    const [USDTAmount, setUSDTAmount] = useState("1");
    const [error, setError] = useState();

    const formattedAmount = useMemo(() => {
        return parseFloat(USDTAmount.replace(/,/g, ""));
    }, [USDTAmount]);

    const weiAmount = useMemo(() => {
        return new BigNumber(formattedAmount).multipliedBy(10 ** 6).toString();
    }, [formattedAmount]);

    const totalUMC = useMemo(() => {
        const total = new BigNumber(formattedAmount).dividedBy(tokenPrice);
        return total.gt(0) ? total.toString() : 0;
    }, [formattedAmount, tokenPrice]);

    // Selector Amount
    useEffect(() => {
        if (isNaN(formattedAmount) || formattedAmount < 1) {
            setError("Min buy is 1 USDT");
        } else {
            setError(null);
        }
    }, [formattedAmount]);

    function handleChangeUSDTAmount(event) {
        let inputValue = event.target.value.replace(/[^0-9.,]/g, "");

        const pointsLength = inputValue.match(/\./g)?.length || 0;
        if (pointsLength > 1) {
            return;
        }

        const floatLength = inputValue.match(/\.(\d+)/)?.[1].length || 0;
        if (floatLength > 2) {
            inputValue = Number(inputValue).toFixed(2);
        }

        setUSDTAmount(inputValue);
    }

    const errorHandling = {
        onSettled: (data, error) => {
            if (error == null) {
                setError(null);
            }
        },
        onError: (error) => {
            setError(error.cause.message);
        }
    };

    const {
        write: approveTransfer,
        isLoading: isApproveLoading,
        data: approveData,
    } = useContractWrite({
        ...TokenUSDTAddress,
        functionName: "approve",
        args: [TokenPresaleAddress.address, weiAmount],
        ...errorHandling
    });

    const {
        write: buyTokens,
        data: buyData,
        isLoading: isBuyLoading
    } = useContractWrite({
        ...TokenPresaleAddress,
        functionName: "buyTokens",
        args: [weiAmount],
        ...errorHandling
    });

    const { isLoading: isBuyTransactionLoading } = useWaitForTransaction({
        hash: buyData?.hash,
        onSuccess: () => {
            void refetchBalance();
        },
        ...errorHandling
    });

    const isBuySending = isBuyTransactionLoading || isBuyLoading;

    const { isLoading: isApproveTransactionLoading } = useWaitForTransaction({
        hash: approveData?.hash,
        onSuccess: () => {
            if (!isBuySending) {
                buyTokens();
            }
        },
        ...errorHandling
    });


    const totalTokensP = <p key="total-tokens-p">You will get {totalUMC} UMC</p>;

    return (
        <>
            <div className="Main">
                <div className="Navbara">
                    <div className="NavbarLeft">
                        <h4 className="Title">TOKEN SALE USDT - UMC</h4>
                    </div>
                    <div className="NavbarRight">
                        <Web3Button balance="show"/>
                        <div>
                            {isConnected && (
                                <p>
                                    {balanceUMC
                                        ? `UMC balance: ${balanceUMC}`
                                        : "Fetching balance..."}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="column2">
                        <div className="TokenContainer">
                            <div className="ContainerContent">
                                <h1 className="TokenTitlle">Token Price</h1>

                                <p className="TokenRate">1 UMC = {tokenPrice} USDT</p>


                                {isConnected && !(isApproveTransactionLoading || isBuyTransactionLoading) && (
                                    <>
                                        <ConfirmAllowance buyTokens={buyTokens} disabled={isBuySending} tokenPrice={tokenPrice} />

                                        <p className="AmountText">USDT Amount</p>
                                        <input
                                            className="input"
                                            type="text"
                                            id="total-price-input"
                                            disabled={isApproveLoading}
                                            value={USDTAmount}
                                            onChange={handleChangeUSDTAmount}
                                        />
                                        {totalTokensP}
                                        <button
                                            onClick={() => approveTransfer()}
                                            className="BuyButton"
                                            disabled={error != null || isApproveLoading}
                                        >
                                            Approve USDT
                                        </button>
                                    </>
                                )}
                                {(isApproveTransactionLoading || isBuyTransactionLoading) && (
                                    <>
                                        <p>Please wait for transaction approval...</p>
                                        {isApproveTransactionLoading && (
                                            <p>After approval, please, confirm transaction for getting tokens.</p>
                                        )}
                                        {totalTokensP}
                                    </>
                                )}

                                {error != null && <p className="TokenError" key="error-tokens-p">{error}</p>}

                                {!isConnected && (
                                    <button disabled className="BuyButton">
                                        Please Connect Wallet
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
