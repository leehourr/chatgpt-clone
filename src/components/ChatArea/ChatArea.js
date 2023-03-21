import React, { useContext } from "react";
import user from "../../assets/user.jpg";
import ChatContext from "../../context/Chat-context";

const Index = () => {
  const chatCtx = useContext(ChatContext);
  console.log(chatCtx.chat);
  return (
    <main className="flex flex-col justify-start  w-full h-full">
      {chatCtx.chat.map((i) => (
        <section className="w-full md:w-[45%] flex items-center justify-start gap-4 mx-auto py-4 bg-black/20 ">
          <img className="w-6 h-6 rounded-sm" src={user} alt="" />
          <p>{i.text}</p>
        </section>
      ))}
    </main>
  );
};

export default Index;
