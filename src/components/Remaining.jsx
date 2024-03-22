import React from "react";
import { useGlobalState } from "../context/context";

const Remaining = () => {
  const { expenses, budget, currency } = useGlobalState();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += parseInt(item.cost));
  }, 0);

  const remainingbudget = budget - totalExpenses;

  const alertType = remainingbudget < 0 ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType} `}>
      <span>
        Remaining: {currency.label}
        {remainingbudget}
      </span>
    </div>
  );
};
export default Remaining;
