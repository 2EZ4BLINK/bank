"use client";

import React from "react";
import useHeader from "./useHeader";

const Header = () => {
  const classes = useHeader();

  return (
    <div>
      <p className={classes.title}>useReducer Bank Account</p>
    </div>
  );
};

export default Header;
