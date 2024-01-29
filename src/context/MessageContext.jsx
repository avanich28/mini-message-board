import { createContext, useContext, useState } from "react";
import { createMessage } from "../services/apiMessage";

const MessageContext = createContext();

const defaultInputs = {
  name: "",
  message: "",
};

function MessageProvider({ children }) {
  const [inputs, setInputs] = useState(defaultInputs);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [fieldName, setFieldName] = useState("");

  function addInput(e) {
    const { name, value } = e.target;
    setFieldName("");
    setInputs((obj) => ({ ...obj, [name]: value }));
  }

  function addEmoji(e) {
    setFieldName("");
    setInputs((obj) => ({ ...obj, message: obj.message + e.native }));
    setOpenEmoji(false);
  }

  function toggleEmojiPicker(e) {
    e.stopPropagation();
    setFieldName("");
    setOpenEmoji((isOpen) => !isOpen);
  }

  function sendMessage(e) {
    e.preventDefault();
    const { name, message } = inputs;

    if (!name || !message) {
      const keys = Object.keys(inputs).filter((key) => inputs[key] === "");
      const str = keys.length > 1 ? "all" : keys[0];

      return setFieldName(str);
    }

    const data = {
      name,
      message,
      date: new Date(),
    };

    setFieldName("");
    setInputs(defaultInputs);

    createMessage(data);
  }

  return (
    <MessageContext.Provider
      value={{
        inputs,
        openEmoji,
        addInput,
        addEmoji,
        toggleEmojiPicker,
        sendMessage,
        fieldName,
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
