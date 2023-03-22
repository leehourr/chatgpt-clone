import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import ChatContext from "../../context/Chat-context";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const chatCtx = useContext(ChatContext);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const mobileScreen = useMediaQuery({
    query: "(max-width: 640px)",
  });
  return (
    <div className="flex items-center w-full text-white text-[14px]">
      <div
        className={`$ w-[16.4rem] flex px-2 h-screen bg-[#202123] flex-col items-center justify-between`}
      >
        <button
          onClick={chatCtx.removeChatHandler}
          className="w-full text-left pl-3 mt-2 py-3 border-[1px] border-white/30 rounded-md cursor-pointer hover:bg-white/5"
        >
          + New chat
        </button>
        <footer className="w-full flex flex-col gap-3 border-t-[1px] border-t-white/20 mb-4">
          <button className="w-full text-left mt-1 pl-3 py-3 rounded-md cursor-pointer hover:bg-white/5">
            Dark mode
          </button>
          <p>&copy; 2023 ChatGPT clone - Leang Lyhour</p>
        </footer>
      </div>
      <main className="bg-[#444654] flex-1 h-screen overflow-y-hidden">
        {mobileScreen && (
          <header className="w-full bg-[#343541] pt-2 pb-2 px-4 border-b-[1px] border-b-white/10">
            <div className="text-[16px] flex items-center justify-between">
              <div>...</div>
              <h1 className="">Model summarizes conversation</h1>
              <span className="text-2xl">+</span>
            </div>
          </header>
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default Index;
