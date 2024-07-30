import {
  JSX,
  ParentComponent,
  createSignal,
  lazy,
  type Component,
} from "solid-js";
import { A } from "@solidjs/router";

import banner from "./assets/banner.png";
import { useCartContext } from "./context/CartContext";

const Home = lazy(() => import("./pages/Home"));

const App: ParentComponent = (props) => {
  const [darkMode, setDarkMode] = createSignal(false);

  const { items } = useCartContext();

  const toggleTheme = () => {
    setDarkMode(!darkMode());
  };

  const totalItems = () => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{ "bg-neutral-900": darkMode(), "text-white": darkMode() }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </span>
        <h1>Ninja Merch</h1>

        <A href="/">Home</A>
        <A href="/cart">Cart ({totalItems()})</A>
      </header>

      <img class="rounded-md" src={banner} alt="site banner" />

      {props.children}
    </div>
  );
};

export default App;
