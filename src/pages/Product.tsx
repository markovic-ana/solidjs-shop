import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import { IProduct } from "./Home";
import { ICartProduct, useCartContext } from "../context/CartContext";

const fetchProduct = async (id: string): Promise<IProduct> => {
  const response = await fetch(`http://localhost:4000/products/${id}`);
  return response.json();
};

export default function Product() {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct);

  const { items, setItems } = useCartContext();

  const addProduct = () => {
    if (!product()) return;
    const exists = items.find((item) => item.id === product()?.id);

    exists &&
      setItems(
        (p) => p.id === product()?.id,
        "quantity",
        (curr) => curr + 1,
      );
  };

  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-5 gap-7">
          <div class="col-span-2">
            <img src={product()?.img} alt="product image" />
          </div>

          <div class="col-span-3">
            <h2 class="text-3xl font-bold mb-7">{product()?.title}</h2>
            <p>{product()?.description}</p>
            <p class="my-7 text-2xl">Only £{product()?.price}</p>

            <button class="btn" onClick={addProduct}>
              Add to cart
            </button>
          </div>
        </div>
      </Show>
    </div>
  );
}
