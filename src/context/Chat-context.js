import React from "react";

const ChatContext = React.createContext({
  chat: [],
  newChat: null,
  removeChatHandler: () => {},
  addChatHandler: () => {},
});

export default ChatContext;
