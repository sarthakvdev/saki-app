import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";

const Index: NextPage = () => {
  return (
    <div className="min-h-screen bkg">
      <Header />
      <Home />
    </div>
  );
};

export default Index;
