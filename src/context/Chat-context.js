import React from "react";

const ChatContext = React.createContext({
  chat: [],
  newChat: false,
  removeChatHandler: () => {},
  addChatHandler: () => {},
});

export default ChatContext;
