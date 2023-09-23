import ItemDetail from "./ItemDetail"
import CartContext from "../../context/CartContext"
import { useState, useEffect, useContext } from "react"
import { getProduct } from "../../services"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(true)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const { addItem } = useContext(CartContext)


    useEffect(() => {
        getProduct(id)
            .then((response) => {
                setItem(response)
            })
            .catch(() => {
                setItem(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])



    return <ItemDetail item={item} loading={loading} addItem={addItem} />

}

export default ItemDetailContainer;