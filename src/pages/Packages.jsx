import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { packages } from "../data/packages";
import PackageCard from "../components/PackageCard";

const categories = [
  {
    id: "nacional",
    emoji: "🇲🇽",
    title: "Viajes nacionales",
    description: "Descubre México y crea nuevas oportunidades de venta.",
  },
  {
    id: "internacional",
    emoji: "✈️",
    title: "Viajes internacionales",
    description: "Destinos internacionales listos para ofrecer a tus clientes.",
  },
  {
    id: "crucero",
    emoji: "🚢",
    title: "Cruceros",
    description: "Experiencias completas navegando hacia nuevos destinos.",
  },
  {
    id: "grupal",
    emoji: "👥",
    title: "Viajes grupales",
    description: "Salidas especiales con acompañamiento y experiencias compartidas.",
  },
  {
    id: "tematico",
    emoji: "🎡",
    title: "Viajes temáticos",
    description: "Viajes diseñados alrededor de una experiencia especial.",
  },
];

function Packages() {
  const carouselRefs = useRef({});

  const scrollCarousel = (categoryId, direction) => {
    const container = carouselRefs.current[categoryId];

    if (!container) return;

    const scrollAmount = container.clientWidth * 0.85;

    container.scrollBy({
      left: direction === "left"
        ? -scrollAmount
        : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="packages-page">

      <div className="page-header">
        <span className="eyebrow">
          CATÁLOGO
        </span>

        <h1>
          Paquetes disponibles
        </h1>

        <p>
          Explora nuestros destinos, comparte los viajes
          con tus clientes y genera nuevas ventas.
        </p>
      </div>

      <div className="packages-categories">

        {categories.map((category) => {

          const categoryPackages = packages.filter(
            (packageItem) =>
              packageItem.categories?.includes(category.id)
          );

          return (
            <section
              className="package-category"
              key={category.id}
            >

              <div className="package-category-header">

                <div>
                  <div className="package-category-title">
                    <span className="package-category-emoji">
                      {category.emoji}
                    </span>

                    <h2>
                      {category.title}
                    </h2>
                  </div>

                  <p>
                    {category.description}
                  </p>
                </div>

                {categoryPackages.length > 0 && (
                  <div className="carousel-controls">

                    <button
                      type="button"
                      onClick={() =>
                        scrollCarousel(
                          category.id,
                          "left"
                        )
                      }
                      aria-label={`Anterior en ${category.title}`}
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        scrollCarousel(
                          category.id,
                          "right"
                        )
                      }
                      aria-label={`Siguiente en ${category.title}`}
                    >
                      <ChevronRight size={20} />
                    </button>

                  </div>
                )}

              </div>

              {categoryPackages.length > 0 ? (

                <div
                  className="packages-carousel"
                  ref={(element) => {
                    carouselRefs.current[category.id] =
                      element;
                  }}
                >

                  {categoryPackages.map(
                    (packageItem) => (
                      <div
                        className="package-carousel-item"
                        key={packageItem.id}
                      >
                        <PackageCard
                          packageItem={packageItem}
                        />
                      </div>
                    )
                  )}

                </div>

              ) : (

                <div className="empty-package-category">
                  <span>🏖️</span>
                  <p>
                    Próximamente tendremos paquetes
                    en esta categoría.
                  </p>
                </div>

              )}

            </section>
          );
        })}

      </div>

    </div>
  );
}

export default Packages;