import React from "react";

function Button(props) {
  return (
    <a
      href={props.link}
      className={`${props.class} bg-black py-1 px-3 rounded-full text-white`}
    >
      {props.title}
    </a>
  );
}

export default Button;
