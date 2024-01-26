import botImg from "../assets/bot.png";
import ImageBox from "./ImageBox";

function Message({ name, message, profile = false }) {
  return (
    <div className={`flex items-end ${profile || "self-end"}`}>
      {profile && <ImageBox src={botImg} alt="Bot" type="secondary" />}

      <div className={`tracking-wide ${profile || "text-right"}`}>
        <h2 className="font-semibold">{name}</h2>
        <div
          className={`chat ${profile ? "chat-start" : "chat-end"} text-left`}
        >
          <p
            className={`chat-bubble ${
              profile || "chat-bubble-success"
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
