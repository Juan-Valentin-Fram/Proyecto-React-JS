import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#f5f5f5', alignItems: 'center' }}>
            <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#453572' }}>
                Click&Shop
            </Link>

            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
                <li><Link to="/category/almacen" style={{ textDecoration: 'none', color: 'black' }}>Almacén</Link></li>
                <li><Link to="/category/bebidas" style={{ textDecoration: 'none', color: 'black' }}>Bebidas</Link></li>
                <li><Link to="/category/limpieza" style={{ textDecoration: 'none', color: 'black' }}>Limpieza</Link></li>
            </ul>

            <CartWidget />
        </nav>
    );
};

export default NavBar;