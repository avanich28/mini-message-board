import { botMessage } from "../utils/constants";
import { useMessages } from "../hooks/useMessages";
import { useMessage } from "../context/MessageContext";

import MessageLists from "./MessageLists";
import Spinner from "./Spinner";
import Error from "./Error";

// NOTE use React Query, Provider, RTK!
function ChatDetail() {
  const { data, isLoading, error } = useMessages();
  const { isCreating } = useMessage();

  return (
    <main className="bg-zinc-900 text-zinc-50 py-3 flex flex-col gap-3 overflow-y-auto min-h-[310px]">
      <MessageLists data={botMessage} />

      {error && <Error error={error} />}

      {isLoading && <Spinner />}

      {!error &&
        !isLoading &&
        data.length > 0 &&
        data.map((msg) => <MessageLists key={msg._id} data={msg} />)}

      {isCreating && <Spinner />}
    </main>
  );
}

export default ChatDetail;
