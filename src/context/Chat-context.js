import React from "react";

const ChatContext = React.createContext({
  chat: [],
  newChat: null,
  removeChatHandler: () => {},
  addChatHandler: () => {},
  catchError: () => {},
});

export default ChatContext;
