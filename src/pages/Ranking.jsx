const ranking = [

  {
    id: 1,
    name: "Vendedor ejemplo",
    sales: 12,
    commission: 24000
  },

  {
    id: 2,
    name: "Vendedor ejemplo 2",
    sales: 8,
    commission: 16000
  },

  {
    id: 3,
    name: "Vendedor ejemplo 3",
    sales: 5,
    commission: 10000
  }

];


function Ranking() {

  return (

    <div>

      <div className="page-header">

        <h1>

          Ranking 🏆

        </h1>

        <p>

          Próximamente podrás
          competir y celebrar
          tus logros.

        </p>

      </div>


      <div className="ranking-list">

        {ranking.map(
          (
            seller,
            index
          ) => (

            <div
              className="ranking-item"
              key={seller.id}
            >

              <div className="ranking-position">

                #{index + 1}

              </div>


              <div className="ranking-info">

                <h3>

                  {seller.name}

                </h3>

                <p>

                  {seller.sales}
                  {" ventas"}

                </p>

              </div>


              <strong>

                $
                {
                  seller.commission
                    .toLocaleString()
                }

              </strong>

            </div>

          )
        )}

      </div>

    </div>

  );

}

export default Ranking;