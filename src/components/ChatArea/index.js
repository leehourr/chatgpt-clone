import React, { useContext, useEffect, useRef, useState } from "react";
import HomePage from "./HomePage";
import ChatArea from "./ChatArea";
import sendIcon from "../../assets/send_icon.png";
import ChatContext from "../../context/Chat-context";
import { askChatGpt } from "../../utils/api";

const Index = () => {
  const inputRef = useRef("");
  const chatCtx = useContext(ChatContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    if (input.trim() !== "") {
      chatCtx.addChatHandler({ sender: "user", text: input });
      inputRef.current.value = "";
      const res = await askChatGpt(input);
      console.log(res);
      chatCtx.addChatHandler({
        sender: "chatgpt",
        text: res.data.choices[0].message.content,
      });
      return;
    }
    inputRef.current.focus();
    return;
  };

  return (
    <div className="bg-[#343541] w-full h-full flex flex-col pb-8 px-6 md:px-0 items-center justify-between">
      <header className="flex items-center justify-between mx-2"></header>
      <div className="flex-grow flex items-center justify-center w-full overflow-y-auto">
        {chatCtx.newChat && <HomePage />}
        {!chatCtx.newChat && <ChatArea />}
      </div>

      <form
        onSubmit={submitHandler}
        className="relative w-full md:w-[32.5rem] shadow-lg shadow-black/10"
      >
        <input
          ref={inputRef}
          defaultValue=""
          className="w-full  bg-[#40414F] py-2 rounded-md outline-none pl-3 text-[10px] "
          type="text"
        />
        <button type="submit">
          <img
            className="absolute invert opacity-50 cursor-pointer top-[0.35rem] hover:bg-white/90 right-2 w-5 p-1 rounded-md"
            src={sendIcon}
            alt=""
          />
        </button>
      </form>
    </div>
  );
};

export default Index;
