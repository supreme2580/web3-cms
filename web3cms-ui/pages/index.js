import Head from "next/head";

export default function Home() {
    return(
        <div>
            <Head>
                <title>OpenContent</title>
                <meta name="description" content="A web3 content management system" />
                <link rel="icon" href="/opencontentlogo.png" />
            </Head>
            <main>
                <div className="w-full"></div>
            </main>
        </div>
    )
}