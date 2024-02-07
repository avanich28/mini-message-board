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

  // if (error) return <Error error={error} />;

  return (
    <main className="bg-zinc-900 text-zinc-50 py-3 flex flex-col gap-3 overflow-y-auto min-h-[310px]">
      {error ? (
        <Error error={error} />
      ) : (
        <>
          {!isLoading && <MessageLists data={botMessage} />}

          {isLoading && <Spinner />}

          {!isLoading &&
            data.length > 0 &&
            data.map((msg) => <MessageLists key={msg._id} data={msg} />)}

          {isCreating && <Spinner />}
        </>
      )}
    </main>
  );
}

export default ChatDetail;
