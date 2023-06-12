import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useState, useEffect } from "react";
import {
  useDisconnect,
  useAccount,
  usePrepareContractWrite,
  usePrepareContractRead,
  useContractRead,
  useContractWrite,
} from "wagmi";

import PresaleAbi from "../abi/PresaleAbi.json";
import USDTAbi from "../abi/USDTTokenAbi.json";

export default function HomePage() {
  const { address } = useAccount();
  const { isConnected } = useAccount();

  // Contracts
  const [TokenUSDTAddress, setTokenUSDTAddress] = useState({
    address: "0xDeC0238084f3BBA8DEb7819ae40c7Db470DEE944",
    abi: USDTAbi,
  });
  const [TokenPresaleAddress, setTokenPresaleAddress] = useState({
    address: "0x1c103ad0921c35abe1a5e396479922450D38Ad76",
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
    args: ["0x1c103ad0921c35abe1a5e396479922450D38Ad76", 1000000],
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
            <p className="Title">TOKEN SALE USDT - RUB</p>
          </div>
          <div className="NavbarRight">
            <Web3Button balance="show" />
          </div>
        </div>

        <div className="container">
          <div className="column2">
            <div className="TokenContainer">
              <div className="ContainerContent">
                <h1 className="TokenTitlle">Token Sale </h1>

                <p className="TokenRate">1 USDT = 81 RUB</p>

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
