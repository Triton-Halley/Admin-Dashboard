import React, { ReactNode } from "react";
import Menu from "../menu/Menu";
import Lamp from "../../assets/Lamp.svg";
import SignOut from "../menu/Signout";
import Divider from "@mui/material/Divider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen grid-custom-col-2 overflow-x-hidden">
      {/* Drawer menu */}
      <div className="h-10/11 w-[250px] grid-pos-1-2 py-5 flex flex-col justify-between rounded-3xl bg-[#0d1928] mx-2 my-5 fixed left-0 top-0 bottom-0 text-white">
        <div className="flex flex-col gap-5">
          <div className="w-full flex justify-center items-center">
            <img src={Lamp} className="w-20" alt="logo" />
          </div>
          <Divider variant="middle" sx={{ bgcolor: "whitesmoke" }} />
          <Menu />
        </div>
        <SignOut />
      </div>
      {/* Main */}
      <div className="m-5  grid-pos-2-3">{children}</div>
    </div>
  );
}
