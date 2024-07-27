import { Component } from "solid-js";

export const Card: Component<{}> = (props) => {
  return (
    <div class="bg-white p-4 text-center rounded-md shadow-md">
      <h2>Card</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam
        voluptas dicta ad fuga. Id!
      </p>
      <button class="btn">Click me!</button>
    </div>
  );
};
