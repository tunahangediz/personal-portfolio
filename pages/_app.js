import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import "remixicon/fonts/remixicon.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
