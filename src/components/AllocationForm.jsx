import { useState } from "react";
import { useGlobalState } from "../context/context";

const AllocationForm = () => {
  const [department, setDepartment] = useState(null);
  const [allocationType, setAllocationType] = useState("Add");
  const [amount, setAmount] = useState(0);
  const { increaseAllocation, decreaseAllocation, expenses, budget } =
    useGlobalState();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += parseInt(item.cost));
  }, 0);

  const remainingbudget = budget - totalExpenses;

  const handleSubmit = () => {
    if (department && allocationType && amount) {
      if (amount > remainingbudget) {
        alert("This amount is more than remaining budget.");
      } else {
        if (allocationType === "Add") {
          increaseAllocation(department, amount);
        } else if (allocationType === "Reduce") {
          decreaseAllocation(department, amount);
        }
      }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              {" "}
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="HR" name="hr">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(e) => setAllocationType(e.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          <input
            required="required"
            type="number"
            id="cost"
            style={{ marginLeft: "2rem", size: 10 }}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />

          <button
            className="btn btn-primary"
            style={{ marginLeft: "2rem" }}
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
