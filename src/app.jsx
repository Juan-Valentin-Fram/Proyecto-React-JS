import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <div className="app-container">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Click&Shop!" />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Explorando categoría" />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>

                    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#dbd79a', marginTop: '20px' }}>
                        <h3>Creado por Juan Fram // Click&Shop</h3>
                    </footer>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;