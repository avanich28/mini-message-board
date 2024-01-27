import { formatDate } from "../utils/helpers";
import Message from "./Message";

function MessageLists({ data }) {
  const date = formatDate(data[0].date);

  return (
    <div>
      <h3 className="uppercase bg-zinc-50 text-zinc-900 px-3 text-xs font-semibold rounded-full w-max ml-auto mr-auto mt-5 mb-1">
        {date}
      </h3>
      <ul className="flex flex-col">
        {data.map((chat) => (
          <Message
            key={chat.date}
            name={chat.name}
            message={chat.message}
            date={chat.date}
            profile={chat?.profile}
          />
        ))}
      </ul>
    </div>
  );
}

export default MessageLists;
