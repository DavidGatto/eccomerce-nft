import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ stock, onAdd }) => {
  const [counter, setCoutner] = useState(1);
  const sumar = () => {
    if (counter < stock) {
      setCoutner(counter + 1);
    } else {
      alert("cantidad maxima");
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCoutner(counter - 1);
    }
  };
  return (
    <Counter sumar={sumar} restar={restar} counter={counter} onAdd={onAdd} />
  );
};
