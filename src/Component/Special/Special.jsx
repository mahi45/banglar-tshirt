import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <p>
        <small>Ring: {ring}</small>
      </p>
    </div>
  );
};

export default Special;
