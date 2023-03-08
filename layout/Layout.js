import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <div className={"max-w-[900px] w-full mr-auto ml-auto px-4 mb-auto "}>
        <Head>
          <title>Tunahan Gediz</title>
          <meta name="description" content="Tunahan Gediz Frontend Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
