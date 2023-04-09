import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Auncle from "../Auncle/Auncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("Gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Has Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex">
            <Father></Father>
            <Auncle></Auncle>
            <Aunty></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
