import { createSignal, type Component } from "solid-js";

import banner from "./assets/banner.png";
import { Card } from "./components/Card";

const App: Component = () => {
  const [darkMode, setDarkMode] = createSignal(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode());
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
      </header>

      <img class="rounded-md" src={banner} alt="site banner" />

      <div class="grid grid-cols-4 gap-10 my-4">
        <Card rounded>
          <h2>1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nam voluptas dicta ad fuga. Id!
          </p>
          <button class="btn">view</button>{" "}
        </Card>
        <Card rounded>
          <h2>2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nam voluptas dicta ad fuga. Id!
          </p>
          <button class="btn">view</button>
          <p>Only $10</p>
        </Card>
      </div>
    </div>
  );
};

export default App;
