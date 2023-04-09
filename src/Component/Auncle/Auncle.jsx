import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Auncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Auncle</h2>
      <p>
        <small>Grandpa Money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1k taka</button>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila</Cousin>
      </section>
    </div>
  );
};

export default Auncle;
