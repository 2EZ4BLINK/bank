import {
  CLOSE_ACCOUNT,
  DEPOSIT_MONEY,
  LOAN_MONEY,
  OPEN_ACCOUNT,
  PAY_LOAN,
  WITHDRAW_MONEY,
} from "@/constants/actions";
import { INITIAL_STATE } from "@/constants/App.const";

export const reducer = (prevState, action) => {
  switch (action.type) {
    case OPEN_ACCOUNT:
      return {
        ...prevState,
        isActive: true,
        balance: 500,
      };
    case DEPOSIT_MONEY:
      return {
        ...prevState,
        balance: prevState.balance + action.payload,
      };
    case WITHDRAW_MONEY:
      return {
        ...prevState,
        balance: prevState.balance - action.payload,
      };
    case LOAN_MONEY:
      return {
        ...prevState,
        balance: prevState.balance + action.payload,
        loan: action.payload,
      };
    case PAY_LOAN:
      return {
        ...prevState,
        balance: prevState.balance - action.payload,
        loan: prevState.loan - action.payload,
      };
    case CLOSE_ACCOUNT:
      return {
        ...INITIAL_STATE,
      };
    default:
      throw new Error("Action undefined");
  }
};
