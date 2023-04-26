import React from "react";
import { useLocation } from 'react-router-dom';

const PaymentContainer = ({ totalPrice }) => {
  const { state } = useLocation();

  const containerAmount = state.totalPrice || totalPrice || 0;

  React.useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);

  return (
    <div>
      <h2>Total: {containerAmount}</h2>
    </div>
  );
};

export default PaymentContainer;