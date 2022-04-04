import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CoffeeShopRouter } from "./CoffeeShopRouter";

import { HomeScreen } from "../HomeScreen";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/coffeeshop/*" element={<CoffeeShopRouter />} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
