import { useState } from "react"
import CartContext from "./CartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        toast('Su/s pruducto/s ha/n sido removido/s', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 900,
            theme: "dark"
            });
    
    }


    const cleanCart = () => {
        setCart([])
        toast('Su carrito ha sido vaciado', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 900,
            theme: "dark"

            });
    
    }
    
    const successCart = () => {
        setCart([])
        toast.success('Su compra ha sido exitosa', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 900,
            theme: "dark"
            });
    
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, cleanCart, successCart, inCart, decrementItem }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;