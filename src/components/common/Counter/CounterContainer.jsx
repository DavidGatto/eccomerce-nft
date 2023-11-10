import { useState } from "react";
import { Counter } from "./Counter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const notify = () =>
    toast.success("Added product!", {
      position: "bottom-right",
    });
  const [counter, setCoutner] = useState(initial);
  const sumar = () => {
    if (counter < stock) {
      setCoutner(counter + 1);
    } else {
      toast.error("maximum quantity", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCoutner(counter - 1);
    }
  };
  return (
    <Counter
      sumar={sumar}
      restar={restar}
      counter={counter}
      onAdd={onAdd}
      notify={notify}
    />
  );
};
