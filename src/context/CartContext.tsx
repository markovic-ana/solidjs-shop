import { ParentComponent, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { IProduct } from "../pages/Home";

export type ICartProduct = Omit<IProduct, "img" | "description"> & {
  quantity: number;
};

function useCartProviderValue() {
  const [items, setItems] = createStore<ICartProduct[]>([]);
  return { items, setItems };
}

export type CartContextType = ReturnType<typeof useCartProviderValue>;

const CartContext = createContext<CartContextType>();

export const CartProvider: ParentComponent = (props) => {
  const { items, setItems } = useCartProviderValue();
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(`useCartContext must be used within a CartProvider`);
  }
  return context;
}
