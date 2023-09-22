import './ItemDetail.css'

const ItemDetail = ({ item, loading, addItem }) => {

    if (loading) {
        return <h2 className="text-center mt-3">Cargando informacion del producto...</h2>
    }

    if (!item) {
        return <h2 className="text-center mt-3 text-danger">Todavia no tenemos ese producto</h2>
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-4" style={{ maxWidth: "550px", maxHeight: "550px" }}>
                <img src={item.img} className="card-img-top img-fluid h-50 p-1" alt={item.name} />
                <h1 className="card-title text-center mt-1">{item.name}</h1>
                <p className="card-text text-center fw-bold mt-2 mb-2">{item.description}</p>
                <span className="card-text text-start ms-3 mt-1 mb-1 fw-bold">Stock: {item.stock}</span>
                <span className="card-text text-center ms-3 mt-1 mb-1 fw-bold precio">${item.price}</span>
                <button onClick={() => addItem(item, 1)} className="btn btn-danger w-50 m-auto mb-1">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail;