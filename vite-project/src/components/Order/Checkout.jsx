import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { useState } from "react"
import styles from "./Checkout.css"
import { calculateTotal, cartMappingForOrders } from "../../utils"
import { serverTimestamp } from "firebase/firestore"
import { createOrders } from "../../services"


const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        email: "",
        name: "",
        phone: ""
    })

    const { email, name, phone } = input

    const { cart, cleanCart } = useContext(CartContext)

    const total = calculateTotal(cart)

    const handleCheckout = () => {
        const order = {
            buyer: {
                name,
                email,
                phone
            },
            items: cartMappingForOrders(cart),
            total,
            date: serverTimestamp()
        }
        setIsLoading(true)
        createOrders(order).then((docRef) => {
            setOrderId(docRef.id)
            setIsLoading(false)
            cleanCart()
        })
    }

    const valorInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const send = (e) => {
        e.preventDefault()
        if (validateForm()) {
            handleCheckout();
        }
    }

    const validateForm = () => {
        const newErrors = {};

        const emailMatches = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailMatches)) {
            newErrors.email = "Correo electrónico no valido";
        }

        if (!name.trim()) {
            newErrors.name = "Ingresa un nombre valido";
        }
        if (!phone.trim()) {
            newErrors.phone = "Ingrese un telefono valido";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    return (
        <>

            {isLoading && <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                <div className="spinner-border" role="status"></div>
            </div>}

            {orderId && <div>
                <h1 className="text-center mt-3">Compra finalizada</h1>
                <p className="order">Su numero de orden es: {orderId}</p>
            </div>}

            {!orderId &&
                <form className="container m-auto w-50 mt-3 fondo">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="Email">Correo electronico</label>
                        <input type="email" className="form-control" id="Email" name="email" onChange={valorInput} placeholder="Introduzca su correo" required />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="Name">Nombre</label>
                        <input type="text" className="form-control" id="Name" name="name" onChange={valorInput} placeholder="Introduzca su nombre" required />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="Phone">Telefono</label>
                        <input type="tel" className="form-control" id="Phone" name="phone" onChange={valorInput} placeholder="Introduzca su numero" required pattern="[0-9]"/>
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    
                    <div class="text-center">
                    <button type="submit" className="btn btn-danger" onClick={send}>Finalizar compra</button>
                    </div>
                </form>
            }
        </>
    )
}

export default Checkout;