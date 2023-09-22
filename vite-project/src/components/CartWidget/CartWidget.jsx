import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { quantityCart } from "../../utils"

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    const quantity = quantityCart(cart)

    return (
        <div className="col-md-1">
            <button className="btn btn-outline-danger text-light position-relative">
                <i className="bi bi-bag fs-4"></i>
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${!!quantity && "bg-danger"}`}>
                    {quantity > 0 ? quantity : ""}
                    <span className="visually-hidden">Productos que contiene en el carrito</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget;