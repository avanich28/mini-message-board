import { HiFaceSmile } from "react-icons/hi2";
import { BsFillSendFill } from "react-icons/bs";
import Icon from "./Icon";
import Button from "./Button";
import Input from "./Input";

function InputMessage() {
  return (
    <footer className="flex justify-between items-center bg-zinc-600 text-zinc-50 py-2 gap-3">
      <Button className="hover:text-amber-300">
        <Icon className="text-3xl">
          <HiFaceSmile />
        </Icon>
      </Button>

      <div className="flex flex-col w-full gap-1">
        <Input placeholder="Username" />
        <Input placeholder="Type a message" />
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
