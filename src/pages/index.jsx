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
    token: "0x9125e2C2E77E5C8207fe5111bc84F32fc1246d2d", //token address UMBA
  });

  const balanceUmba = balance.data ? balance.data.formatted : null;
  const balanceError = balance.error;

  // Error handling
  if (balanceError) {
    console.error("Error fetching balance:", balanceError);
  }

  // Contracts
  const [TokenUSDTAddress, setTokenUSDTAddress] = useState({
    address: "0x5F84e945455bffC501ACB53894FB1400D4725e54", // USDT token address
    abi: USDTAbi,
  });
  const [TokenPresaleAddress, setTokenPresaleAddress] = useState({
    //Presale contract address
    address: "0xd7558a339BeDfaEeE67DB2C04E9f53989dDB69FC",
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
    args: ["0xd7558a339BeDfaEeE67DB2C04E9f53989dDB69FC", 1000000], //presale address
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
