import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_ALLOCATION": {
      let total_expenses = state.expenses.reduce((total, item) => {
        return (total += parseInt(item.cost));
      }, 0);

      console.log(action.payload.amount);

      let total_budget = total_expenses + parseInt(action.payload.amount);
      if (total_budget <= state.budget) {
        total_budget = 0;

        state.expenses.map((expense) => {
          if (expense.id === action.payload.id) {
            expense.cost = expense.cost + parseInt(action.payload.amount);
          }

          return expense;
        });
        return { ...state };
      } else {
        alert("Allocation is not possible due to insufficient budget.");
        return state;
      }
    }

    case "DECREASE_ALLOCATION": {
      state.expenses.map((expense) => {
        if (
          expense.id === action.payload.id &&
          expense.cost - parseInt(action.payload.amount) >= 0
        ) {
          expense.cost = expense.cost - parseInt(action.payload.amount);
        }
        return expense;
      });

      return { ...state };
    }

    case "DELETE_EXPENSE": {
      const newExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      return { ...state, expenses: newExpenses };
    }
    case "SET_BUDGET": {
      return { ...state, budget: parseInt(action.payload) };
    }
    case "SET_CURRENCY": {
      return { ...state, currency: action.payload };
    }

    default:
      return state;
  }
};

const App = createContext();

export const Provider = ({ children }) => {
  const initialState = {
    budget: 2000,
    expenses: [
      { id: "Marketing", name: "Marketing", cost: 40 },
      { id: "Finance", name: "Finance", cost: 40 },
      { id: "Sales", name: "sales", cost: 40 },
      { id: "IT", name: "IT", cost: 40 },
      { id: "HR", name: "Human resource", cost: 40 },
    ],
    currency: {
      value: "Pound",
      label: "£",
    },
  };

  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <App.Provider
      value={{
        budget: globalState.budget,
        expenses: globalState.expenses,
        increaseAllocation: (id, amount) => {
          dispatch({ type: "INCREASE_ALLOCATION", payload: { id, amount } });
        },
        decreaseAllocation: (id, amount) => {
          dispatch({ type: "DECREASE_ALLOCATION", payload: { id, amount } });
        },
        deleteExpense: (id) => {
          dispatch({ type: "DELETE_EXPENSE", payload: id });
        },
        setBudget: (budget) => {
          dispatch({ type: "SET_BUDGET", payload: budget });
        },
        currency: globalState.currency,
        setCurrency: (currency) => {
          dispatch({ type: "SET_CURRENCY", payload: currency });
        },
      }}
    >
      {children}
    </App.Provider>
  );
};

export const useGlobalState = () => useContext(App);
