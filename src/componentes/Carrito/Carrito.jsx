
const Carrito = ({carrito}) => {

    return (
      <>
      <div>
        <h2> Carrito de compras </h2>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}> {item.title} - $ {item.price}</li>
            ))}
          </ul>
      </div>
      </>
    )
}
export default Carrito