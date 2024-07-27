import { Component, JSXElement, children } from "solid-js";

interface ICardProps {
  children: JSXElement;
  flat?: boolean;
  rounded?: boolean;
}

export const Card: Component<ICardProps> = (props) => {
  const safeChildren = children(() => props.children);

  return (
    <div
      class="bg-white p-4 text-center"
      classList={{ "rounded-md": props.rounded, "shadow-md": !props.flat }}
    >
      {safeChildren()}
    </div>
  );
};
