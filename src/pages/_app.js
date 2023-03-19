import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Pentagon</title>
                <meta name="description" content="Pentagon" />
                <link rel="icon" href="/Pentagon.png?ao_noptimize=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
