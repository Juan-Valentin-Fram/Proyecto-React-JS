import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#453572' }}>
                Click&Shop
            </Link>

            <div className="navbar-links">
                <NavLink
                    to="/category/almacen"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Almacén
                </NavLink>

                <NavLink
                    to="/category/bebidas"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Bebidas
                </NavLink>

                <NavLink
                    to="/category/limpieza"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Limpieza
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;