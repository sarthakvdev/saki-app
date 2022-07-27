import type { NextPage } from "next";
import Header from "@components/Header";
import Home from "@components/Home";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col text-neutral-900 bkg">
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default Index;
