import { formatTime } from "../utils/helpers";
import botImg from "../assets/bot.png";
import ImageBox from "./ImageBox";

function Message({ name, message, date = new Date(), profile = false }) {
  const time = formatTime(date);

  return (
    <div className={`flex items-end mb-1 ${profile || "self-end"}`}>
      {profile && <ImageBox src={botImg} alt="Bot" type="secondary" />}

      <div className={`tracking-wide ${profile || "text-right"}`}>
        <h2 className="font-semibold chat-header text-base">
          {name}
          <time className="text-xs opacity-50 ml-1">{time}</time>
        </h2>
        <div
          className={`chat ${profile ? "chat-start" : "chat-end"} text-left`}
        >
          <p
            className={`chat-bubble ${
              profile || "bg-emerald-600"
            } text-zinc-50`}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
