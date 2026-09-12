import { useState } from "react";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Packages from "./pages/Packages";
import Materials from "./pages/Materials";
import Scripts from "./pages/Scripts";
import Content from "./pages/Content";
import SellMore from "./pages/SellMore";
import Calculator from "./pages/Calculator";
import Sales from "./pages/Sales";
import Ranking from "./pages/Ranking";

function App() {

  const [activePage, setActivePage] =
    useState("dashboard");


  const renderPage = () => {

    switch (activePage) {

      case "packages":
        return <Packages />;

      case "materials":
        return <Materials />;

      case "scripts":
        return <Scripts />;

      case "content":
        return <Content />;

      case "sell-more":
        return <SellMore />;

      case "calculator":
        return <Calculator />;

      case "sales":
        return <Sales />;

      case "ranking":
        return <Ranking />;

      default:
        return <Dashboard />;
    }

  };


  return (

    <Layout
      activePage={activePage}
      setActivePage={setActivePage}
    >

      {renderPage()}

    </Layout>

  );

}

export default App;