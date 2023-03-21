import React, { useContext, useRef, useState } from "react";
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
      inputRef.current.value = "";
      const res = await askChatGpt(input);
      console.log(res);
      chatCtx.addChatHandler({
        sender: "chatgpt",
        text: res.data.choices[0].message.content,
      });
    }
    inputRef.current.focus();
    setIsLoading(false);
  };

  return (
    <div className="bg-[#343541] w-full h-full flex flex-col pb-[3.2rem] items-center justify-between">
      <header className="flex items-center justify-between mx-2"></header>
      <section className="flex-grow flex items-center justify-center w-full overflow-y-auto">
        {chatCtx.newChat && <HomePage />}
        {!chatCtx.newChat && <ChatArea isLoading={isLoading} />}
      </section>
      <section className="w-full px-6 md:w-[47.9rem] ">
        <form
          onSubmit={submitHandler}
          className="relative w-full shadow-lg shadow-black/10"
        >
          <input
            ref={inputRef}
            defaultValue=""
            className="w-full bg-[#40414F] py-4 rounded-md outline-none pl-3 text-[10px] "
            type="text"
          />
          <button type="submit">
            <img
              className="absolute invert opacity-50 cursor-pointer top-2 hover:bg-white/90 right-2 w-7 p-1 rounded-md"
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
