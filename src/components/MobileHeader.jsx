import {
  Menu,
  X
} from "lucide-react";


function MobileHeader({

  menuOpen,
  setMenuOpen

}) {

  return (

    <header className="mobile-header">

      <div className="mobile-brand">

         Kamtaliers

      </div>


      <button
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {menuOpen
          ? <X />
          : <Menu />
        }

      </button>

    </header>

  );

}

export default MobileHeader;