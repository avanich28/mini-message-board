import { useState } from "react";
import { HiFaceSmile } from "react-icons/hi2";
import { BsFillSendFill } from "react-icons/bs";
import { getEmoji } from "../utils/helpers";
import Icon from "./Icon";
import Button from "./Button";
import Input from "./Input";
import ColorPicker from "./ColorPicker";

// NOTE Use Provider, RTK
function InputMessage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  console.log(name, message);

  return (
    <footer className="flex justify-between items-center bg-zinc-600 text-zinc-50 py-2 gap-3 relative rounded-b-2xl">
      {openEmoji && (
        <ColorPicker
          onClickOutside={() => setOpenEmoji(false)}
          onEmojiSelect={(e) => {
            setMessage((msg) => msg + `${e.native}`);
            setOpenEmoji(false);
          }}
        />
      )}
      <Button
        className="hover:text-amber-300"
        onClick={(e) => {
          e.stopPropagation();
          setOpenEmoji((isOpen) => !isOpen);
        }}
      >
        <Icon className="text-3xl">
          <HiFaceSmile />
        </Icon>
      </Button>

      <div className="flex flex-col w-full gap-1">
        <Input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button className="hover:text-emerald-500">
        <Icon className="text-2xl">
          <BsFillSendFill />
        </Icon>
      </Button>
    </footer>
  );
}

export default InputMessage;
