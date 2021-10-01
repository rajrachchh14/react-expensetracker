import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export default function Balence() {
  const { transaction } = useContext(GlobalContext); // List all Data
  const amount = transaction.map((transaction) => transaction.amount); // list all amount
  const total = amount.reduce((a, b) => (a += b), 0).toFixed(2); // Plus minus & Get Final Amount

  return (
    <>
      <h4 className="text-center"> Balence ${total}</h4>
    </>
  );
}
