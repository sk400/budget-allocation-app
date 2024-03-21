import { useGlobalState } from "../context/context";

const Budget = () => {
  const { budget, setBudget } = useGlobalState();

  return (
    <div className="alert alert-secondary">
      <span>Budget: £ </span>
      <input
        type="number"
        step="10"
        defaultValue={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
    </div>
  );
};
export default Budget;
