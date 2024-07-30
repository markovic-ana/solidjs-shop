import { For, JSX, Show, createResource } from "solid-js";
import Card from "../components/Card";
import { A } from "@solidjs/router";

//Api should be in a separate file like src/api/products.ts

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

type IProducts = IProduct[];

const fetchProducts = async (): Promise<IProducts> => {
  const response = await fetch("http://localhost:4000/products");
  return response.json();
};

export default function Home(): JSX.Element {
  const [products] = createResource(fetchProducts);

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded>
              <img src={product.img} alt={product.title} />
              <h2 class="my-3 font-bold">{product.title}</h2>
              <A href={`/product/${product.id}`} class="btn rounded">
                View
              </A>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}
