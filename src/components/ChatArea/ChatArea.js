import React, { useContext, useMemo, useState } from "react";
import user from "../../assets/user.jpg";
import chatGpt from "../../assets/chatgpt-icon.png";
import ChatContext from "../../context/Chat-context";
import sinking from "../../assets/sinking.png";

const Index = ({ isLoading }) => {
  const chatCtx = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  useMemo(() => {
    setMessages((prev) => [...prev, ...chatCtx.chat]);
  }, [chatCtx]);
  console.log(isLoading);
  return (
    <main className="flex flex-col justify-start w-full h-full">
      {messages.map((i, index) =>
        i.sender === "user" ? (
          <section
            key={index}
            className="w-full px-6 md:px-0 md:w-[45%] flex items-center justify-start gap-[13px] mx-auto py-4 "
          >
            <img className="w-6 h-6 rounded-sm" src={user} alt="" />
            <p>{i.text}</p>
          </section>
        ) : (
          <section
            key={index + Math.random()}
            className="w-full px-6 md:px-0 bg-[#444654]"
          >
            <div className="w-full md:w-[45%] flex items-center justify-start gap-[13px] mx-auto py-4">
              <img className="w-6 h-6 rounded-sm" src={chatGpt} alt="" />
              <p>{i.text}</p>
            </div>
          </section>
        )
      )}
      {isLoading && (
        <section className="w-full px-6 md:px-0 bg-[#444654]">
          <div className="w-full md:w-[45%] flex items-start justify-start mx-auto py-4">
            <img className="w-6 h-6 rounded-sm" src={chatGpt} alt="" />
            <img
              className="w-16 h-16 sm:w-28 sm:h-28 ml-7"
              src={sinking}
              alt=""
            />
            <h1 className="text-lg sm:text-xl font-semibold">Sinking...</h1>
          </div>
        </section>
      )}
    </main>
  );
};

export default Index;
