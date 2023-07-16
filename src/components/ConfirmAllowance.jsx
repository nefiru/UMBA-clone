import { useAccount, useContractRead } from "wagmi";

import BigNumber from "bignumber.js";

import { useUSDT } from "../hooks/useUSDT";
import { usePresale } from "../hooks/usePresale";

export function ConfirmAllowance({ buyTokens }) {
    const { address, isConnected } = useAccount();
    const TokenUSDTAddress = useUSDT();
    const PresaleAddress = usePresale();

    const { data, isLoading } = useContractRead({
        ...TokenUSDTAddress,
        functionName: "allowance",
        args: [address, PresaleAddress.address],
        enabled: isConnected
    });

    const wei = useMemo(() => {
        return new BigNumber(data ? data.toString() : 0);
    }, [data]);

    const USDT = useMemo(() => {
        return wei.dividedBy(10 ** 6).toString();
    }, [wei]);

    const UMC = useMemo(() => {
        return wei.dividedBy(10 ** 6).multipliedBy(12.5).toString();
    }, [wei]);

    return (
        <>
            {!isLoading && wei.gt(0) && (
                <>
                    <p>
                        You have confirmed {USDT} USDT and could buy {UMC} UMC
                    </p>
                    <button
                        onClick={() => {
                            buyTokens({
                                args: [data.toString()]
                            })
                        }}
                        className="BuyButton"
                    >
                        Buy Token
                    </button>
                    <p>Or</p>
                </>
            )}
        </>
    );
}

import { useMemo } from "react";
