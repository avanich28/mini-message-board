import { formatDate } from "../utils/helpers";
import Message from "./Message";

function MessageLists({ data }) {
  const { _id, messages } = data;
  const date = formatDate(_id);

  return (
    <div>
      <h3 className="uppercase bg-zinc-50 text-zinc-900 px-3 text-xs font-semibold rounded-full w-max ml-auto mr-auto mt-5 mb-1">
        {date}
      </h3>
      <ul className="flex flex-col">
        {messages.map((msg) => (
          <Message
            key={msg.user}
            user={msg.user}
            text={msg.text}
            date={msg.date}
            profile={msg?.profile}
          />
        ))}
      </ul>
    </div>
  );
}

export default MessageLists;
