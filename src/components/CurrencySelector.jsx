import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import { useGlobalState } from "../context/context";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "Pound",
    label: "£",
  },
  {
    value: "Rupee",
    label: "₹",
  },
];

const CurrencySelector = () => {
  const { currency, setCurrency } = useGlobalState();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const findCurrency = currencies.find((item) => item.value === value);
    setCurrency({
      value: findCurrency.value,
      label: findCurrency.label,
    });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={currency.value}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {currencies.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label} {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CurrencySelector;
