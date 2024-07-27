import type { Component } from "solid-js";

import banner from "./assets/banner.png";
import { Card } from "./components/Card";

const App: Component = () => {
  return (
    <div class="container m-auto">
      <header>
        <span class="material-symbols-outlined cursor-pointer">light_mode</span>
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
