import { useGlobalState } from "../context/context";

const ExpenseTotal = () => {
  const { expenses } = useGlobalState();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += parseInt(item.cost));
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: £{totalExpenses}</span>
    </div>
  );
};
export default ExpenseTotal;
