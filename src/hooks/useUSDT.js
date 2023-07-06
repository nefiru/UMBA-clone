import { useState } from "react";
import USDTAbi from "../abi/USDTTokenAbi.json";

export function useUSDT() {
    const [TokenUSDTAddress] = useState({
        address: process.env.NEXT_PUBLIC_USDT_CONTRACT_ADDRESS, // USDT token address
        abi: USDTAbi,
    });

    return TokenUSDTAddress;
}
