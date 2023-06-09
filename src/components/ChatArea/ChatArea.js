import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import user from "../../assets/user.jpg";
import chatGpt from "../../assets/chatgpt-icon.png";
import ChatContext from "../../context/Chat-context";
import sinking from "../../assets/sinking.png";

// import ScrollIntoView from "react-scroll-into-view";
// import { useScrollTo } from "../../hook/ScrollTo";

const Index = ({ isLoading, hasError }) => {
  const chatCtx = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);
  useMemo(() => {
    setMessages((prev) => [...prev, ...chatCtx.chat]);
  }, [chatCtx]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="flex flex-col justify-start w-full text-[15px] ">
      {messages.map((i, index) =>
        i.sender === "user" ? (
          <section
            key={index}
            className="w-full px-6 md:px-0 md:w-[45%] flex items-center justify-start gap-[13px] mx-auto py-7 "
          >
            <img className="w-8 h-8 rounded-sm" src={user} alt="" />
            <p>{i.text}</p>
          </section>
        ) : (
          <section
            ref={bottomRef}
            id="bottomChat"
            key={index + Math.random()}
            className="w-full px-6 md:px-0 bg-[#444654] border-t-[1px] border-t-black/40"
          >
            <div className="w-full md:w-[45%] relative   flex items-start justify-start gap-[13px] mx-auto py-7">
              <img className="w-8 h-8 rounded-sm" src={chatGpt} alt="" />
              <p className="whitespace-pre-line ">{i.text}</p>
            </div>
          </section>
        )
      )}
      {isLoading && (
        <section
          ref={bottomRef}
          className="w-full px-6 md:px-0 bg-[#444654] border-t-[1px] border-t-black/40"
        >
          <div className="w-full md:w-[45%] flex items-start justify-start mx-auto py-7 ">
            <img className="w-8 h-8 rounded-sm" src={chatGpt} alt="" />
            <img
              className="w-20 h-20 sm:w-32 sm:h-32 ml-9"
              src={sinking}
              alt=""
            />
            <h1 className="text-lg sm:text-2xl font-semibold">Sinking...</h1>
          </div>
        </section>
      )}
      {hasError && (
        <section
          ref={bottomRef}
          className="w-full px-6 md:px-0 bg-[#444654] border-t-[1px] border-t-black/40 mb-10"
        >
          <div className="w-full md:w-[45%] flex items-start justify-start mx-auto py-7  gap-[13px]">
            <img className="w-8 h-8 rounded-sm" src={chatGpt} alt="" />
            <h1 className="bg-red-700/20 border-[1px] border-red-700 rounded-lg px-3 py-2">
              Sonething went wrong, please try reloading the conversation.
            </h1>
          </div>
        </section>
      )}
    </main>
  );
};

export default Index;
