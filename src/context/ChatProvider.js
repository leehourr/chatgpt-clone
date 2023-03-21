import React, { useState } from "react";
import ChatContext from "./Chat-context";

const ChatProvider = (props) => {
  const [chat, setChat] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [hasError, setHasError] = useState(false);

  const removeChatHandler = () => {
    setNewChat(true);
    setChat([]);
  };

  const addChatHandler = (input) => {
    setNewChat(false);
    setChat([input]);
  };

  const catchError = () => {
    setHasError(true);
  };

  const value = {
    chat,
    newChat,
    hasError,
    removeChatHandler,
    addChatHandler,
    catchError,
  };
  return (
    <ChatContext.Provider value={value}>{props.children}</ChatContext.Provider>
  );
};

export default ChatProvider;
