import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Layout from "./dashboard/layout/Layout";
import { RoutingSystem } from "./routing/RoutingSystem";

function App() {
  return <RouterProvider router={RoutingSystem} />;
}

export default App;
