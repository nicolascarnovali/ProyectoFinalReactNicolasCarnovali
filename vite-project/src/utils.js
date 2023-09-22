export const quantityCart = (carrito) => {
    return carrito.reduce((acc, act) => acc + act.cantidad, 0)
}

export const totalProduct = (producto) => {
    return producto.price * producto.cantidad
}

export const calculateTotal = (total) => {
    let totalCalculado = total.reduce((acc, act) => acc + act.price * act.cantidad , 0)
    return totalCalculado.toLocaleString()
}

export const cartMappingForOrders = (carrito) => {
    return carrito.map((item) => ({
        id: item.id,
        cantidad: item.cantidad,
        precio: item.price,
        nombre: item.name
    }))
}