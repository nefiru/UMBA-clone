import { useState } from "react";
import PresaleAbi from "../abi/PresaleAbi.json";

export function usePresale() {
    const [TokenPresaleAddress] = useState({
        address: process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS, //Presale contract address
        abi: PresaleAbi,
    });

    return TokenPresaleAddress;
}
