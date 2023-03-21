import React, { useContext, useEffect, useRef } from "react";
import HomePage from "./HomePage";
import ChatArea from "./ChatArea";
import sendIcon from "../../assets/send_icon.png";
import ChatContext from "../../context/Chat-context";

const Index = () => {
  const inputRef = useRef();
  const chatCtx = useContext(ChatContext);
  useEffect(() => {
    console.log(chatCtx.newChat);
  }, [chatCtx]);

  const inputHandler = (e) => {
    // console.log(e);
    const input = inputRef.current.value;
    if (e.code === "Enter" || e.type === "click") {
      // console.log(input);
      chatCtx.addChatHandler({ from: "user", text: input });
      inputRef.current.value = "";
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // if (inputValue.trim() !== "") {
    //   const response = await axios.post("/api/chatgpt", {
    //     message: inputValue,
    //   });
    //   setMessages([...messages, { text: inputValue, user: true }]);
    //   setMessages([...messages, { text: response.data.message, user: false }]);
    //   setInputValue("");
    // }
  };

  return (
    <div className="bg-[#343541] w-full h-full flex flex-col pb-8 px-6 md:px-0 items-center justify-between">
      <header className="flex items-center justify-between mx-2"></header>
      <div className="flex-grow flex items-center justify-center w-full overflow-y-auto">
        {chatCtx.newChat && <HomePage />}
        {!chatCtx.newChat && <ChatArea />}
      </div>

      <div className="relative w-full md:w-[32.5rem] shadow-lg shadow-black/10">
        <input
          ref={inputRef}
          defaultValue=""
          onKeyDown={inputHandler}
          className="w-full  bg-[#40414F] py-2 rounded-md outline-none pl-3 text-[10px] "
          type="text"
        />
        <img
          onClick={inputHandler}
          className="absolute invert opacity-50 cursor-pointer top-[0.35rem] hover:bg-white/90 right-2 w-5 p-1 rounded-md"
          src={sendIcon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Index;
