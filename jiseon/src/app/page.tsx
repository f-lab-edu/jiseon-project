"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import LoginPage from "@/pages/loginPage";

export default function Home() {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
}
