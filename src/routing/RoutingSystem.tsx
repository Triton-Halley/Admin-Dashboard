import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "../dashboard/dashboard/Dashboard";
import Users from "../dashboard/users/Users";

export const RoutingSystem = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/posts" element={<Dashboard />} />
      <Route path="/setting" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
    </Route>
  )
);
