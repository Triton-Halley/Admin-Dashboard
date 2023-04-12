import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
export default function SignOut() {
  return (
    <div className=" w-full p-5 cursor-pointer">
      <div className="flex items-center bg-blue-400 rounded-lg p-2 gap-1 text-gray-200">
        <LogoutIcon />
        <span>SignOut</span>
      </div>
    </div>
  );
}
