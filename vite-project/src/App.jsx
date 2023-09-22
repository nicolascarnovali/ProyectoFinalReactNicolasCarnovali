import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Cart from './components/Cart/Cart'
import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/CartProvider'
import Checkout from './components/Order/Checkout'

function App() {

  return (
    <CartProvider>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />

        <Route path='/category/:category' element={<ItemListContainer />} />

        <Route path='/item/:id' element={<ItemDetailContainer />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </CartProvider>
  )
}

export default App;
