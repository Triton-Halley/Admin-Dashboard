import React from "react";
import { Link, useLocation } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import PermMediaIcon from "@mui/icons-material/PermMedia";
export default function Menu() {
  const { pathname } = useLocation();
  return (
    <nav className="w-full  flex flex-col justify-end p-5 items-start gap-5">
      <Link
        to={"/"}
        className={`w-full rounded-lg p-2 ${
          pathname === "/" ? "bg-blue-500" : ""
        }`}
      >
        <div className=" flex items-center gap-2">
          <DashboardIcon />
          <span>Dashboard</span>
        </div>
      </Link>
      <Link
        to={"/posts"}
        className={`w-full rounded-lg p-2 ${
          pathname === "/posts" ? "bg-blue-500" : ""
        }`}
      >
        <div className=" flex items-center gap-2">
          <ArticleIcon />
          <span>Posts</span>
        </div>
      </Link>
      <Link
        to={"/users"}
        className={`w-full rounded-lg p-2 ${
          pathname === "/users" ? "bg-blue-500" : ""
        }`}
      >
        <div className=" flex items-center gap-2">
          <GroupIcon />
          <span>Users</span>
        </div>
      </Link>
      <Link
        to={"/setting"}
        className={`w-full rounded-lg p-2 ${
          pathname === "/setting" ? "bg-blue-500" : ""
        }`}
      >
        <div className=" flex items-center gap-2">
          <SettingsIcon />
          <span>Setting</span>
        </div>
      </Link>
      <Link
        to={"/assets"}
        className={`w-full rounded-lg p-2 ${
          pathname === "/assets" ? "bg-blue-500" : ""
        }`}
      >
        <div className=" flex items-center gap-2">
          <PermMediaIcon />
          <span>Assets</span>
        </div>
      </Link>
    </nav>
  );
}
