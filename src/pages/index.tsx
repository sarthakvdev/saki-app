import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";

const Index: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-0">
      <Head>
        <title>Saki | Home of the most Gen-Z NFT Collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex border-b border-gray-300 h-24 w-full items-center justify-center border-t">
        <Header />
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Home />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
