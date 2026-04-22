import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        console.log("Agregando al carrito:", item.name, "Cantidad:", quantity);

        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            setCart(prev => prev.map(prod =>
                prod.id === item.id
                    ? { ...prod, quantity: prod.quantity + quantity }
                    : prod
            ));
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};