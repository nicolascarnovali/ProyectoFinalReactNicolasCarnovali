import { useContext } from "react"
import styles from "./Cart.css"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"
import { totalProduct, calculateTotal } from "../../utils"


const Cart = () => {

    const { cart, addItem, removeItem, cleanCart, decrementItem } = useContext(CartContext)

    const total = calculateTotal(cart)

    return (
        <div>
            <h1 className="text-center mt-2">Carrito</h1>
            <div className="container-fluid d-flex justify-content-center gap-4 flex-wrap">
                {cart.map((element) => (
                    <div key={element.id} className="card overflow-hidden" style={{ maxWidth: "345px", maxHeight: "370px" }}>
                        <img src={element.img} className="card-img-top img-fluid h-50 p-1 border-bottom" alt={element.name} />
                        <h5 className="card-title text-center">{element.name}</h5>
                        <p className=" ms-2 fw-bold">${totalProduct(element)}</p>
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                            <button className="btn btn-dark" onClick={() => decrementItem(element, 1)}>-</button>
                            <p className="fw-bold quantity">{element.cantidad}</p>
                            <button className="btn btn-dark" onClick={() => addItem(element, 1)}>+</button>
                        </div>
                        <i class="bi bi-trash-fill delete" onClick={() => removeItem(element)}></i>
                    </div>
                ))}
            </div>

            {cart.length > 0 ? (
                <div className="container-fluid mt-3 mb-3 fw-bold fs-4 text-center">
                    <p>Su total es de: ${total}</p>
                    <div className="container-btn">
                        <button className="btn btn-danger delete-cart" onClick={() => cleanCart()}><i class="bi bi-x-square"></i>  Vaciar Carrito</button>
                        <Link to={"/checkout"}><button className="btn btn-danger finalize-purchase">Continuar  <i class="bi bi-arrow-return-right"></i></button></Link>
                    </div>
                </div>)
                : <p className="empty-cart">Todavia no hay productos en el carrito...</p>}
        </div>
    )
}

export default Cart;