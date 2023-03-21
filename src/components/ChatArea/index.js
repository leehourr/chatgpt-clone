import React, { useContext, useEffect, useRef, useState } from "react";
import HomePage from "./HomePage";
import ChatArea from "./ChatArea";
import sendIcon from "../../assets/send_icon.png";
import ChatContext from "../../context/Chat-context";
import { askChatGpt } from "../../utils/api";

const Index = () => {
  const inputRef = useRef("");
  const chatCtx = useContext(ChatContext);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLoading) return;
    const input = inputRef.current.value;
    if (input.trim() !== "") {
      chatCtx.addChatHandler({ sender: "user", text: input });
      const res = await askChatGpt(input);
      // console.log(res);
      chatCtx.addChatHandler({
        sender: "chatgpt",
        text: res.data.choices[0].message.content,
      });
    }
    setIsLoading(false);
    inputRef.current.focus();
  };

  return (
    <div className="bg-[#343541] w-full h-full flex flex-col pb-8 items-center justify-between">
      <header className="flex items-center justify-between mx-2"></header>
      <section className="flex-grow flex items-center justify-center w-full overflow-y-auto">
        {chatCtx.newChat && <HomePage />}
        {!chatCtx.newChat && <ChatArea isLoading={isLoading} />}
      </section>
      <section className="w-full px-6 md:w-[32.5rem] ">
        <form
          onSubmit={submitHandler}
          className="relative w-fullshadow-lg shadow-black/10"
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
      </section>
    </div>
  );
};

export default Index;
