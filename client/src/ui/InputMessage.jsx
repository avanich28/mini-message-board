import { HiFaceSmile } from "react-icons/hi2";
import { BsFillSendFill } from "react-icons/bs";
import ColorPicker from "./ColorPicker";
import { useMessage } from "../context/MessageContext";

import Icon from "./Icon";
import Button from "./Button";
import Input from "./Input";
import InputError from "./InputError";

function InputMessage() {
  const {
    inputs: { user, text } = {},
    openEmoji,
    addInput,
    addEmoji,
    toggleEmojiPicker,
    sendMessage,
    fieldName,
    isCreating,
  } = useMessage();

  return (
    <footer className="bg-zinc-600 text-zinc-50 py-2 relative rounded-b-2xl">
      {openEmoji && (
        <ColorPicker
          onClickOutside={toggleEmojiPicker}
          onEmojiSelect={addEmoji}
        />
      )}

      {fieldName && <InputError fieldName={fieldName} />}

      <form
        onSubmit={sendMessage}
        className="flex justify-between items-end gap-3 [&>button]:mb-2"
      >
        <Button
          className="hover:text-amber-300"
          onClick={toggleEmojiPicker}
          type="button"
        >
          <Icon className="text-3xl">
            <HiFaceSmile />
          </Icon>
        </Button>

        <div className="flex flex-col w-full gap-1">
          <Input
            name="user"
            onChange={addInput}
            value={user}
            placeholder="Username"
          />
          <Input
            name="text"
            onChange={addInput}
            value={text}
            placeholder="Type a message"
          />
        </div>

        <Button
          className="hover:text-emerald-500"
          onClick={sendMessage}
          type="submit"
          disabled={isCreating}
        >
          <Icon className="text-2xl">
            <BsFillSendFill />
          </Icon>
        </Button>
      </form>
    </footer>
  );
}

export default InputMessage;
