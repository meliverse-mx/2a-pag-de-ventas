import { useState } from "react";

import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

function Layout({
  children,
  activePage,
  setActivePage
}) {

  const [menuOpen, setMenuOpen] =
    useState(false);


  const handleNavigation = (page) => {

    setActivePage(page);

    setMenuOpen(false);

  };


  return (

    <div className="app-layout">

      <MobileHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />


      <Sidebar
        activePage={activePage}
        setActivePage={handleNavigation}
        menuOpen={menuOpen}
      />


      <main className="main-content">

        {children}

      </main>

    </div>

  );

}

export default Layout;