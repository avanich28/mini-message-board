import { BsFillTelephoneFill } from "react-icons/bs";
import jsLogo from "../assets/js.png";
import Icon from "./Icon";
import Button from "./Button";
import ImageBox from "./ImageBox";

function ChatRoomName({ onClick }) {
  return (
    <header className="py-2 bg-zinc-600 text-zinc-50 flex items-center gap-5 rounded-t-2xl">
      <ImageBox src={jsLogo} alt="Javascript" type="primary" />

      <h1 className="font-semibold tracking-wider text-xl">Chit Chat Group</h1>

      <Button
        onClick={onClick}
        className="ml-auto hover:text-emerald-500 hover:animate-shake"
      >
        <Icon className="text-3xl">
          <BsFillTelephoneFill />
        </Icon>
      </Button>
    </header>
  );
}

export default ChatRoomName;
