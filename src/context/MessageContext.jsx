import { createContext, useContext, useState } from "react";
import { createMessage } from "../services/apiMessage";

const MessageContext = createContext();

function MessageProvider({ children }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  function addName(e) {
    setName(e.target.value);
  }

  function addMessage(e) {
    setMessage(e.target.value);
  }

  function addEmoji(e) {
    setMessage((msg) => msg + e.native);
    setOpenEmoji(false);
  }

  function toggleEmojiPicker(e) {
    e.stopPropagation();
    setOpenEmoji((isOpen) => !isOpen);
  }

  function sendMessage() {
    const data = {
      name,
      message,
      date: new Date(),
    };

    setName("");
    setMessage("");

    createMessage(data);
  }

  return (
    <MessageContext.Provider
      value={{
        name,
        message,
        openEmoji,
        addName,
        addMessage,
        addEmoji,
        toggleEmojiPicker,
        sendMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

function useMessage() {
  const context = useContext(MessageContext);
  if (context === undefined)
    throw new Error("MessageContext was used outside of MessageProvider");

  return context;
}

export { MessageProvider, useMessage };
