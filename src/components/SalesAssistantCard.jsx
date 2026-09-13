import {
  MessageCircle,
  Flame,
  Target,
  RefreshCcw
} from "lucide-react";


function SalesAssistantTabs({
  activeSection,
  setActiveSection
}) {

  const tabs = [

    {
      id: "responses",
      name: "Respuestas rápidas",
      icon: <MessageCircle size={18} />
    },

    {
      id: "objections",
      name: "Objeciones",
      icon: <Flame size={18} />
    },

    {
      id: "closing",
      name: "Cerrar venta",
      icon: <Target size={18} />
    },

    {
      id: "followup",
      name: "Seguimiento",
      icon: <RefreshCcw size={18} />
    }

  ];


  return (

    <div className="assistant-tabs">

      {tabs.map((tab) => (

        <button
          key={tab.id}

          className={
            activeSection === tab.id
              ? "assistant-tab active"
              : "assistant-tab"
          }

          onClick={() =>
            setActiveSection(tab.id)
          }
        >

          {tab.icon}

          {tab.name}

        </button>

      ))}

    </div>

  );

}

export default SalesAssistantTabs;