import { Link } from "react-router-dom"
import styles from "./ItemList.css"

const ItemList = ({ item, loading }) => {
    if (loading) {
        return <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <div className="spinner-border" role="status"></div>
        </div>
    }
    if (item.length === 0) {
        return <h2 className="text-center mt-3 text-danger">Categoria invalida...</h2>
    }

    return (
        <div>
            <ul>
                <h2 className="text-center mt-2">Productos</h2>
                <div className="card-container d-flex flex-wrap gap-3 justify-content-center">
                    {item.map((product) => (
                        <div key={product.id} className="card overflow-hidden" style={{ maxWidth: "345px", maxHeight: "370px" }}>
                            <img src={product.img} className="card-img-top img-fluid h-50 p-1 img-hover" alt={product.name} />
                            <div className="card-body gap-1">
                                <h5 className="card-title text-center mt-2">{product.name}</h5>
                                <span className="card-text text-center ms-3 mt-1 mb-1 fw-bold precio">${product.price}</span>
                                <Link to={`/item/${product.id}`} className="btn btn-danger">Detalles</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </ul>
        </div>

    )
}

export default ItemList;