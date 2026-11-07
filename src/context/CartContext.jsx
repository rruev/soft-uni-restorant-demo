import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    function addItem(dish) {
        setItems((currentItems) => {
            const existing = currentItems.find((item) => item.id === dish.id);
            if (existing) {
                return currentItems.map((item) =>
                    item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...currentItems, { ...dish, quantity: 1 }];
        });
    }

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const cart = useContext(CartContext);
    if (!cart) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return cart;
}
