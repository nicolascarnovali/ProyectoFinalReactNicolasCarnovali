import './ItemDetail.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ItemDetail = ({ item, loading, addItem }) => {
    const [quantity, setQuantity] = useState(1);
    // Initialize quantity with 1

    const addItems = () => {
        addItem(item, quantity);
        
        toast('Producto/s agregado/s al carrito', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 900,
        theme: "dark"
        });
    };

    const addItemDetail = () => {
        setQuantity(quantity + 1);
    };

    const decrementItemDetail = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (loading) {
        return <h2 className="text-center mt-3">Cargando información del producto...</h2>;
    }

    if (!item) {
        return <h2 className="text-center mt-3 text-danger">Todavía no tenemos ese producto</h2>;
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-4" style={{ maxWidth: "550px", maxHeight: "550px" }}>
                <img src={item.img} className="card-img-top img-fluid h-50 p-1" alt={item.name} />
                <h1 className="card-title text-center mt-1">{item.name}</h1>
                <p className="card-text text-center fw-bold mt-2 mb-2">{item.description}</p>
                <span className="card-text text-start ms-3 mt-1 mb-1 fw-bold">Stock: {item.stock}</span>
                <span className="card-text text-center fw-bold precio">${item.price}</span>
                <div className="quantity-control d-flex gap-3 justify-content-center align-items-center">
                    <button onClick={decrementItemDetail} className="btn text-center btn-dark">-</button>
                    <span className="quantity">{quantity}</span>
                    <button onClick={addItemDetail} className="btn text-center btn-dark">+</button>
                </div>
                <button onClick={addItems} className="btn btn-danger m-auto mb-1">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;