import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
    bscTestnet,
    sepolia,
    goerli
} from "wagmi/chains";

import "../styles.css";


// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
    throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const chains = [goerli];

const { publicClient, webSocketPublicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ version: 1, chains, projectId }),
    publicClient,
    webSocketPublicClient
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiConfig, chains);

// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt
export default function App({ Component, pageProps }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    return (
        <>
            {ready && (
                <WagmiConfig config={wagmiConfig}>
                    <Component {...pageProps} />
                </WagmiConfig>
            )}

            <Web3Modal
                defaultChain={goerli}
                themeMode="dark"
                themeVariables={{
                    '--w3m-background-color': '#01A8C3',
                    '--w3m-accent-color': '#01A8C3'
                }}

                projectId={projectId}
                ethereumClient={ethereumClient}
            />
        </>
    );
}
