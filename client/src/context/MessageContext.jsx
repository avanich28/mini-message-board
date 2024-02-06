import { createContext, useContext, useState } from "react";
import { useCreateMessage } from "../hooks/useCreateMessage";

const MessageContext = createContext();

const defaultInputs = {
  user: "",
  text: "",
};

function MessageProvider({ children }) {
  const [inputs, setInputs] = useState(defaultInputs);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [fieldName, setFieldName] = useState("");
  const { createMessage, isCreating } = useCreateMessage();

  function addInput(e) {
    const { name, value } = e.target;
    setFieldName("");
    setInputs((obj) => ({ ...obj, [name]: value }));
  }

  function addEmoji(e) {
    setFieldName("");
    setInputs((obj) => ({ ...obj, text: obj.text + e.native }));
    setOpenEmoji(false);
  }

  function toggleEmojiPicker(e) {
    e.stopPropagation();
    setFieldName("");
    setOpenEmoji((isOpen) => !isOpen);
  }

  function sendMessage(e) {
    e.preventDefault();
    const { user, text } = inputs;

    if (!user || !text) {
      const keys = Object.keys(inputs).filter((key) => inputs[key] === "");
      const str = keys.length > 1 ? "all" : keys[0];

      return setFieldName(str);
    }

    const data = {
      user,
      text,
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
        isCreating,
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
