"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import useBankContentStyles from "./useBankContentStyles";

const BankContents = () => {
  const classes = useBankContentStyles();

  return (
    <Box>
      <Typography className={classes.balance}>Balance: X</Typography>
      <Typography className={classes.loan}>Loan: X</Typography>
    </Box>
  );
};

export default BankContents;
