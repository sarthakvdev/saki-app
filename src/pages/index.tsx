import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";

const Index: NextPage = () => {
  return (
    <div className="border border-blue-400 min-h-screen">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Home />
      </main>
    </div>
  );
};

export default Index;
