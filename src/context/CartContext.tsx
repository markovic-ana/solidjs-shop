import { ParentComponent, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { IProduct } from "../pages/Home";

export type ICartProduct = Omit<IProduct, "img" | "description"> & {
  quantity: number;
};

interface CartContextType {
  items: ICartProduct[];
  setItems: (items: ICartProduct[]) => void;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  setItems: () => {},
});

export const CartProvider: ParentComponent = (props) => {
  const [items, setItems] = createStore<ICartProduct[]>([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
