import React from "react";
import Layout from "../layout/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="w-full flex justify-center items-center gap-5 py-10 flex-wrap">
        <div className="w-[300px] h-[150px] flex justify-center items-center rounded-xl p-5 shadow-2xl ">
          Dashboard Item 1
        </div>
        <div className="w-[300px] h-[150px] flex justify-center items-center rounded-xl p-5 shadow-2xl ">
          Dashboard Item 2
        </div>
        <div className="w-[300px] h-[150px] flex justify-center items-center rounded-xl p-5 shadow-2xl ">
          Dashboard Item 3
        </div>
        <div className="w-[300px] h-[150px] flex justify-center items-center rounded-xl p-5 shadow-2xl ">
          Dashboard Item 4
        </div>
      </div>
    </Layout>
  );
}
