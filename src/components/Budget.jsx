import { useGlobalState } from "../context/context";

const Budget = () => {
  const { budget, setBudget, expenses, currency } = useGlobalState();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += parseInt(item.cost));
  }, 0);

  const handleChange = (e) => {
    let input_budget = e.target.value;

    if (input_budget > 20000) {
      alert("The value cannot exceed 20000");
    } else {
      if (input_budget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending");
      } else {
        setBudget(e.target.value);
      }
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency.label} </span>
      <input type="number" step="10" onChange={handleChange} value={budget} />
    </div>
  );
};
export default Budget;
