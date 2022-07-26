import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full text-neutral-900 transition bkg">
      <div className="flex flex-col flex-1">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default Index;
