"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import useBankContentStyles from "./useBankContentStyles";
import { BUTTON_LABELS } from "@/constants/App.const";
import {
  CLOSE_ACCOUNT,
  DEPOSIT_MONEY,
  LOAN_MONEY,
  OPEN_ACCOUNT,
  PAY_LOAN,
  WITHDRAW_MONEY,
} from "@/constants/actions";

const BankContents = (props) => {
  const { balance, loan, isActive, dispatch } = props;
  const classes = useBankContentStyles();

  const handleAccount = (action) => {
    switch (action) {
      case OPEN_ACCOUNT:
        return dispatch({ type: OPEN_ACCOUNT });
      case DEPOSIT_MONEY:
        return dispatch({ type: DEPOSIT_MONEY, payload: 150 });
      case WITHDRAW_MONEY: {
        const isBlanceZero = balance === 0;
        return isBlanceZero
          ? null
          : dispatch({ type: WITHDRAW_MONEY, payload: 50 });
      }
      case LOAN_MONEY:
        return dispatch({ type: LOAN_MONEY, payload: 5000 });
      case PAY_LOAN:
        return dispatch({ type: PAY_LOAN, payload: loan });
      case CLOSE_ACCOUNT: {
        const isBalanceLoanZero = balance === 0 && loan === 0;
        return isBalanceLoanZero ? dispatch({ type: CLOSE_ACCOUNT }) : null;
      }
      default:
        return null;
    }
  };

  return (
    <Box>
      <Box className={classes.moneyBox}>
        <Typography className={classes.moneyLabel}>
          Balance: {balance}
        </Typography>
        <Typography className={classes.moneyLabel}>Loan: {loan}</Typography>
      </Box>

      <Box className={classes.buttonBox}>
        {(BUTTON_LABELS || []).map((data) => {
          const { label, disable, id, action } = data;
          return (
            <Button
              key={id}
              variant="contained"
              disabled={
                id > 1 ? (isActive ? false : true) : isActive ? true : false
              }
              onClick={() => handleAccount(action)}
            >
              {label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default BankContents;
