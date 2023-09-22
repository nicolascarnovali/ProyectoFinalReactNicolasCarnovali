import styles from "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <Link to="/" className="navbar-brand navbar-nav">
                <a href="#" className="navbar-brand text-black col-md-2 text-center"><img src="../../src/assets/favicon.ico" alt="a" className="logo" />TecnoCompra</a>
                </Link>
                    <div className="container d-flex col-md-9">
                        <input className="formcontrol rounded-0" type="search" placeholder="Search" aria-label="Search"></input>
                    </div>
                    <Link to="/cart"><CartWidget /></Link>
                </div>
            </nav>
            <div className="category container-fluid d-flex justify-content-center align-items-center">
            <ul className="list-group list-group-horizontal m-1">
                <li className="list-group-item border-0 rounded-0"><NavLink to="/" className='nav-link link-underline link-underline-opacity-0 text-light'>Inicio</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/pcs" className='nav-link link-underline link-underline-opacity-0 text-light'>PCs</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/consolas" className='nav-link link-underline link-underline-opacity-0 text-light'>Consolas</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/pantallas" className='nav-link link-underline link-underline-opacity-0 text-light'>Pantallas</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/accesorios" className='nav-link link-underline link-underline-opacity-0 text-light'>Accesorios</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/componentes" className='nav-link link-underline link-underline-opacity-0 text-light'>Componentes</NavLink></li>

            </ul>
        </div>
        </>
    )
}

export default NavBar;