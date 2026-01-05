"use client";

import { BankContent, Header } from "@/components";
import { INITIAL_STATE } from "@/constants/App.const";
import { reducer } from "@/reducer";
import { useReducer } from "react";

export default function Home() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  return (
    <div>
      <Header />
      <BankContent
        loan={loan}
        balance={balance}
        isActive={isActive}
        dispatch={dispatch}
      />
    </div>
  );
}
