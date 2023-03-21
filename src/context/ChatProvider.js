import React, { useState } from "react";
import ChatContext from "./Chat-context";

const ChatProvider = (props) => {
  const [chat, setChat] = useState([]);
  const [newChat, setNewChat] = useState(true);

  const removeChatHandler = () => {
    setNewChat(true);
    setChat([]);
  };

  const addChatHandler = (input) => {
    setNewChat(false);
    setChat([input]);
  };

  const value = {
    chat,
    newChat,
    removeChatHandler,
    addChatHandler,
  };
  return (
    <ChatContext.Provider value={value}>{props.children}</ChatContext.Provider>
  );
};

export default ChatProvider;
