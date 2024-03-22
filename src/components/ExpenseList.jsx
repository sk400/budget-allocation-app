import React from "react";
import { TiDelete } from "react-icons/ti";
import { useGlobalState } from "../context/context";

const ExpenseList = () => {
  const {
    expenses,
    increaseAllocation,
    deleteExpense,
    decreaseAllocation,
    currency,
  } = useGlobalState();
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase by 10</th>
          <th scope="col">Decrease by 10</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>
              {currency.label}
              {expense.cost}
            </td>
            <td>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increaseAllocation(expense.id, 10);
                }}
              >
                +
              </button>
            </td>
            <td>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decreaseAllocation(expense.id, 10);
                }}
              >
                -
              </button>
            </td>
            <td>
              <TiDelete
                size="1.5em"
                onClick={() => deleteExpense(expense.id)}
              ></TiDelete>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
