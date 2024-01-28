import { HiFaceSmile } from "react-icons/hi2";
import { BsFillSendFill } from "react-icons/bs";
import ColorPicker from "./ColorPicker";
import { useMessage } from "../context/MessageContext";

import Icon from "./Icon";
import Button from "./Button";
import Input from "./Input";

function InputMessage() {
  const {
    name,
    message,
    openEmoji,
    addName,
    addMessage,
    addEmoji,
    toggleEmojiPicker,
    sendMessage,
  } = useMessage();

  return (
    <footer className="flex justify-between items-end bg-zinc-600 text-zinc-50 py-2 gap-3 relative rounded-b-2xl [&>button]:mb-2">
      {openEmoji && (
        <ColorPicker
          autoFocus={true}
          onClickOutside={toggleEmojiPicker}
          onEmojiSelect={addEmoji}
        />
      )}

      <Button className="hover:text-amber-300" onClick={toggleEmojiPicker}>
        <Icon className="text-3xl">
          <HiFaceSmile />
        </Icon>
      </Button>

      <div className="flex flex-col w-full gap-1">
        <Input onChange={addName} value={name} placeholder="Username" />
        <Input
          onChange={addMessage}
          value={message}
          placeholder="Type a message"
        />
      </div>

      <Button className="hover:text-emerald-500" onClick={sendMessage}>
        <Icon className="text-2xl">
          <BsFillSendFill />
        </Icon>
      </Button>
    </footer>
  );
}

export default InputMessage;
