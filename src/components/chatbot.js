import React, { useState } from 'react';
import { FaCloud, FaTimes } from 'react-icons/fa';

const ChatRobot = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showCancle, setShowCancle] = useState(false)

  const handleChatboxClick = () => {
    setShowOptions(true);
    setShowCancle(true)
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
  };

  const handleEmailOption = () => {
    console.log("Sending message via email...");
    // Implement your logic for sending message via email here
  };

  const handleChatbotOption = () => {
    console.log("Continuing with chatbot...");
    // Implement your logic for continuing with chatbot here
  };

  return (
    <div className="fixed bottom-0 right-0 m-4">
      {showOptions ? (
        <div className="bg-yellow p-2 shadow-md rounded h-400 overflow-y-auto">
          <div className="cursor-pointer bg-black1" onClick={handleCloseOptions}>
            <FaTimes size={20} />
          </div>
          

          <div className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={handleEmailOption}>
            Send Message via Email
          </div>
          <div className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={handleChatbotOption}>
            Continue with Chatbot
          </div>

          <div className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={handleChatbotOption}>
            Continue with Chatbot
          </div>

          <div className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={handleChatbotOption}>
            Continue with Chatbot
          </div>

          <div className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={handleChatbotOption}>
            Continue with Chatbot
          </div>

          <div className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={handleChatbotOption}>
            Continue with Chatbot
          </div>
        </div>
      ) : (
        <div className="bg-blue-500 text-white p-3 rounded-full cursor-pointer" onClick={handleChatboxClick}>
          {showCancle ? <FaCloud size={20} /> : <FaTimes size={20} />}
        </div>
      )}
    </div>
  );
};

export default ChatRobot;
