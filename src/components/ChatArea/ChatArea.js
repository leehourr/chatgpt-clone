import React, { useContext, useMemo, useState } from "react";
import user from "../../assets/user.jpg";
import chatGpt from "../../assets/chatgpt-icon.png";
import ChatContext from "../../context/Chat-context";

const Index = () => {
  const chatCtx = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  useMemo(() => {
    setMessages((prev) => [...prev, ...chatCtx.chat]);
  }, [chatCtx]);
  console.log(messages);
  return (
    <main className="flex flex-col justify-start w-full h-full">
      {messages.map((i, index) =>
        i.sender === "user" ? (
          <>
            <section
              key={index}
              className="w-full md:w-[45%] flex items-center justify-start gap-[13px] mx-auto py-4 "
            >
              <img className="w-6 h-6 rounded-sm" src={user} alt="" />

              <p>{i.text}</p>
            </section>
          </>
        ) : (
          <section key={index} className="w-full bg-[#444654]">
            <div className="w-full md:w-[45%] flex items-center justify-start gap-[13px] mx-auto py-4">
              <img className="w-6 h-6 rounded-sm" src={chatGpt} alt="" />

              <p>{i.text}</p>
            </div>
          </section>
        )
      )}
    </main>
  );
};

export default Index;
