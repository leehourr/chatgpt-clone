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
  const [hasError, setHasError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasError(false);
    if (isLoading) return;
    const input = inputRef.current.value;
    if (input.trim() !== "") {
      chatCtx.addChatHandler({ sender: "user", text: input });
      try {
        inputRef.current.value = "";
        const res = await fetch("https://chatgpt-clone-leehour.herokuapp.com", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: input }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log("Success:", data);
            return data.data;
          });
        chatCtx.addChatHandler({
          sender: "chatgpt",
          text: res,
        });

        setIsLoading(false);
      } catch (error) {
        // console.log(error);
        setIsLoading(false);
        setHasError(true);
      }
    }
    inputRef.current.focus();
  };

  return (
    <div className="bg-[#343541] w-full h-full flex flex-col pb-[3.2rem] items-center justify-between">
      <section className="flex-grow flex pb-[1rem] items-center justify-center w-full h-full overflow-y-auto scrollbar-thin">
        {chatCtx.newChat && <HomePage />}
        {!chatCtx.newChat && (
          <div className="h-full w-full">
            <ChatArea isLoading={isLoading} hasError={hasError} />
          </div>
        )}
      </section>
      <section className="w-full px-7 xl:px-0 2lg:w-[47.9rem] ">
        <form
          onSubmit={submitHandler}
          className="relative w-full shadow-lg shadow-black/10"
        >
          <input
            ref={inputRef}
            defaultValue=""
            className="w-full bg-[#40414F] py-3 rounded-md outline-none pl-3 text-[15px] "
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
