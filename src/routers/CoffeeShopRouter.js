import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeScreen } from "../projects/coffeShop/HomeScreen";

export const CoffeeShopRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/que-es-big-data" element={<BigData />} /> */}
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </>
  );
};
