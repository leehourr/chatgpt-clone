import React, { useRef, useState } from "react";
import HomePage from "./HomePage";
import ChatArea from "./ChatArea";
import sendIcon from "../../assets/send_icon.png";

const Index = () => {
  const inputRef = useRef();
  const [messages, setMessages] = useState([]);

  //   console.log(messages);

  const inputHandler = (e) => {
    // console.log(e.code==="Enter");
    const input = inputRef.current.value;
    if (e.code === "Enter") {
      console.log(input);
      setMessages((prev) => [...prev, { input }]);
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
    <div className="bg-[#343541] w-full h-full flex flex-col py-9 px-6 md:px-0 items-center justify-between ">
      <div className="flex-grow flex items-center justify-center">
        {messages?.length === 0 && <HomePage />}
        {messages?.length > 0 && <ChatArea messages={messages} />}
      </div>

      <div className="relative w-full md:w-[32.5rem] shadow-lg shadow-black/10">
        <input
          ref={inputRef}
          onKeyDown={inputHandler}
          className="w-full  bg-[#40414F] py-2 rounded-md outline-none pl-3 text-[10px] "
          type="text"
        />
        <img
          className="absolute invert opacity-50 cursor-pointer top-[0.35rem] hover:bg-white/90 right-2 w-5 p-1 rounded-md"
          src={sendIcon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Index;