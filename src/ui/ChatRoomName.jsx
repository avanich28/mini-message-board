import jsLogo from "../assets/js.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import Icon from "./Icon";
import Button from "./Button";
import ImageBox from "./ImageBox";

function ChatRoomName() {
  return (
    <header className="py-2 bg-zinc-600 text-zinc-50 flex items-center gap-5">
      <ImageBox src={jsLogo} alt="Javascript" type="primary" />

      <h1 className="font-semibold tracking-wider text-xl">Chit Chat Group</h1>

      <Button className="ml-auto hover:text-green-500">
        <Icon className="text-2xl">
          <BsFillTelephoneFill />
        </Icon>
      </Button>
    </header>
  );
}

export default ChatRoomName;
