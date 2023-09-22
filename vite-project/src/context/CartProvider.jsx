import { useState } from "react"
import CartContext from "./CartContext"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const inCart = (id) => {
        const itemEnCarrito = cart.find((el) => el.id === id)
        return !!itemEnCarrito
    }

    const addItem = (producto, cantidad) => {

        const enCarrito = inCart(producto.id)

        if (enCarrito) {
            const nuevoCarrito = cart.map((item) => {
                if (item.id === producto.id) {
                    return {
                        ...item,
                        cantidad: item.cantidad + cantidad,
                    };
                }
                return item
            })
            setCart(nuevoCarrito)
        } else {
            setCart([...cart, { ...producto, cantidad }])
        }
    }

    const decrementItem = (producto, cantidad) => {
        if (producto.cantidad === 1) {
            removeItem(producto)
        } else {
            const nuevoCarrito = cart.map((item) => {
                if (item.id === producto.id) {
                    return {
                        ...item,
                        cantidad: item.cantidad - cantidad
                    }
                }
                return item
            })
            setCart(nuevoCarrito)
        }
    }

    const removeItem = (producto) => {
        const nuevoCarrito = cart.filter(el => el.id !== producto.id)
        setCart(nuevoCarrito)
    }


    const cleanCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, cleanCart, inCart, decrementItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;