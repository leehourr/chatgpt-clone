import React, { useState } from "react";

const Index = ({ messages }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-[26px] font-medium">
        <h1>ChatGPT clone</h1>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.user ? "user-message" : "bot-message"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      {/* <div className="chat-input">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type your message here"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div> */}
    </div>
  );
};

export default Index;
