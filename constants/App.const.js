import {
  CLOSE_ACCOUNT,
  DEPOSIT_MONEY,
  LOAN_MONEY,
  OPEN_ACCOUNT,
  PAY_LOAN,
  WITHDRAW_MONEY,
} from "./actions";

export const INITIAL_STATE = {
  balance: 0,
  loan: 0,
  isActive: false,
};

export const BUTTON_LABELS = [
  {
    id: 1,
    disable: false,
    label: "Open account",
    action: OPEN_ACCOUNT,
  },
  {
    id: 2,
    disable: true,
    label: "Deposit 150",
    action: DEPOSIT_MONEY,
  },
  {
    id: 3,
    disable: true,
    label: "Withdraw 50",
    action: WITHDRAW_MONEY,
  },
  {
    id: 4,
    disable: true,
    label: "Request a loan of 5000",
    action: LOAN_MONEY,
  },
  {
    id: 5,
    disable: true,
    label: "Pay loan",
    action: PAY_LOAN,
  },
  {
    id: 6,
    disable: true,
    label: "Close account",
    action: CLOSE_ACCOUNT,
  },
];
