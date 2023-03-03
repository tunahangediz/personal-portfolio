import Head from "next/head";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className={"max-w-[800px] mr-auto ml-auto px-4 "}>
      <Head>
        <title>Tunahan Gediz</title>
        <meta name="description" content="Tunahan Gediz Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
