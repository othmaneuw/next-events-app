import "@/styles/globals.css";
import Head from "next/head";
import { MainLayout } from "@/src/components/Layout/mainLayout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
