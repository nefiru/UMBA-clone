import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useState, useEffect } from "react";
import {
  useDisconnect,
  useAccount,
  usePrepareContractWrite,
  usePrepareContractRead,
  useContractRead,
  useContractWrite,
  useBalance,
} from "wagmi";

import PresaleAbi from "../abi/PresaleAbi.json";
import USDTAbi from "../abi/USDTTokenAbi.json";

export default function HomePage() {
  const { address } = useAccount();
  const { isConnected } = useAccount();

  const balance = useBalance({
    address: address,
    token: process.env.NEXT_PUBLIC_UMBA_CONTRACT_ADDRESS, //token address UMBA
  });

  const balanceUmba = balance.data ? balance.data.formatted : null;
  const balanceError = balance.error;

  // Error handling
  if (balanceError) {
    console.error("Error fetching balance:", balanceError);
  }

  // Contracts
  const [TokenUSDTAddress, setTokenUSDTAddress] = useState({
    address: process.env.NEXT_PUBLIC_USDT_CONTRACT_ADDRESS, // USDT token address
    abi: USDTAbi,
  });
  const [TokenPresaleAddress, setTokenPresaleAddress] = useState({
    //Presale contract address
    address: process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS,
    abi: PresaleAbi,
  });

  // Inputs
  const [USDTAmount, setUSDTAmount] = useState("100");
  const [error, setError] = useState("");

  // Selector Amount
  useEffect(() => {
    const value = parseFloat(USDTAmount.replace(/,/g, ""));
    if (isNaN(value) || value < 100) {
      setError("Min buy is 100 USDT");
    } else {
      setError("");
    }
  }, [USDTAmount]);

  function handleChangeUSDTAmount(event) {
    const inputValue = event.target.value.replace(/[^0-9.,]/g, "");
    setUSDTAmount(inputValue);
  }

  // Aprove USDT
  const { config: ApproveUSDT } = usePrepareContractWrite({
    ...TokenUSDTAddress,
    functionName: "approve",
    args: [process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS, 1000000], //presale address
  });

  const {
    write: Approve,
    isLoading,
    isSuccess,
  } = useContractWrite(ApproveUSDT);

  // Buy token
  const USDTend = USDTAmount.toString();

  const { data, write } = useContractWrite({
    ...TokenPresaleAddress,
    functionName: "buyTokens",
    args: [USDTend],
  });

  return (
    <>
      <div className="Main">
        <div className="Navbara">
          <div className="NavbarLeft">
            <h4 className="Title">TOKEN SALE USDT - UMBA</h4>
          </div>
          <div className="NavbarRight">
            <Web3Button balance="show" />
            <div>
              {isConnected ? (
                <p>
                  {balanceUmba
                    ? `UMBA balance: ${balanceUmba}`
                    : "Fetching balance..."}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="column2">
            <div className="TokenContainer">
              <div className="ContainerContent">
                <h1 className="TokenTitlle">Token Sale </h1>

                <p className="TokenRate">1 UMBA = 0.08 USDT </p>
                <p></p>
                <p className="AmountText">USDT Amount</p>
                <input
                  className="input"
                  type="text"
                  id="total-price-input"
                  value={USDTAmount}
                  onChange={handleChangeUSDTAmount}
                />
                {error && <p className="TokenError">{error}</p>}

                {isConnected ? (
                  <>
                    {isSuccess ? (
                      <>
                        <button
                          disabled={!isConnected}
                          onClick={() => write()}
                          className="BuyButton"
                        >
                          Buy Token
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => Approve?.()}
                          className="BuyButton"
                        >
                          Aprrove USDT
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <button disabled={!isConnected} className="BuyButton">
                      {" "}
                      Please Connect Wallet{" "}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
