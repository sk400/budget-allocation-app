import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button>+</button>
      </td>
      <td>
        <TiDelete size="1.5em"></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
