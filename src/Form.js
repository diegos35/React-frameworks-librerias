import React from "react";

//param props movie
export default function (props) {
  //hooks
  const [quantity, setQuantity] = React.useState(0);
  const { movie } = props; // destruturing
  console.log(props);
  //itera cada uno de los movies
  return (
    <form>
      <h3> {movie.name} </h3>
      <button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
      >
        {" "}
        -{" "}
      </button>
      {quantity}
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={movie.available === quantity}
      >
        +
      </button>
    </form>
  );
}
