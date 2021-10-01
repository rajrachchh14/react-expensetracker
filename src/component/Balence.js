import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export default function Balence() {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <h4 className="text-center">My Bal $200.00</h4>
    </>
  );
}
