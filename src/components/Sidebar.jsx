import {

  LayoutDashboard,
  Plane,
  BookOpen,
  MessageCircle,
  Smartphone,
  Target,
  Calculator,
  ShoppingBag,
  Trophy,
  GraduationCap,

} from "lucide-react";


function Sidebar({

  activePage,
  setActivePage,
  menuOpen

}) {


  const menu = [

    {
      id: "dashboard",
      label: "Inicio",
      icon: <LayoutDashboard size={20} />
    },

    {
      id: "packages",
      label: "Paquetes",
      icon: <Plane size={20} />
    },

     {
      id: "academia",
      name: "Academia Kamtali",
      label: "Academia Kamtali",
      icon: <GraduationCap size={20} />
    }, 

    {
      id: "materials",
      label: "Material",
      icon: <BookOpen size={20} />
    },

    {
      id: "scripts",
      label: "Scripts",
      icon: <MessageCircle size={20} />
    },

    {
      id: "content",
      label: "Contenido",
      icon: <Smartphone size={20} />
    },

    {
      id: "sell-more",
      label: "Vender más",
      icon: <Target size={20} />
    },

    {
      id: "calculator",
      label: "Calculadora",
      icon: <Calculator size={20} />
    },

    {
      id: "sales",
      label: "Mis ventas",
      icon: <ShoppingBag size={20} />
    },

    /* {
      id: "ranking",
      label: "Ranking",
      icon: <Trophy size={20} />
    } */

  ];


  return (

    <aside
      className={`sidebar ${
        menuOpen ? "open" : ""
      }`}
    >

      <div className="brand">

        <div className="brand-icon">

          ✈️

        </div>

        <div>

          <h2>Kamtaliers</h2>

          <span>Equipo de venta</span>

        </div>

      </div>


      <nav>

        {menu.map((item) => (

          <button

            key={item.id}

            className={`nav-item ${
              activePage === item.id
                ? "active"
                : ""
            }`}

            onClick={() =>
              setActivePage(item.id)
            }

          >

            {item.icon}

            <span>

              {item.label}

            </span>

          </button>

        ))}

      </nav>


      <div className="sidebar-bottom">

        <p>

          ✨ Vende experiencias

        </p>

        <small>

          Kamtali Travel

        </small>

      </div>

    </aside>

  );

}

export default Sidebar;