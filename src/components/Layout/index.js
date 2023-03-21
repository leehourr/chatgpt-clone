import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex items-center w-full text-white text-[10px]">
      <div className="w-[12rem] px-2 h-screen bg-[#202123] flex flex-col items-center justify-between">
        <button className="w-full text-left pl-3 mt-2 py-2 border-[1px] border-white/30 rounded-md cursor-pointer hover:bg-white/5">
          + New chat
        </button>
        <footer className="w-full flex flex-col gap-3 border-t-[1px] border-t-white/20 mb-4">
          <button className="w-full text-left mt-1 pl-3 py-2 rounded-md cursor-pointer hover:bg-white/5">
            Dark mode
          </button>
          <p>&copy; 2023 ChatGPT clone - Leang Lyhour</p>
        </footer>
      </div>
      <main className="bg-[#444654] w-full h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Index;
