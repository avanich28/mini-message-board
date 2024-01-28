import { useEffect, useState } from "react";
import { botMessage } from "../utils/constants";

import MessageLists from "./MessageLists";

// { data = true, isLoading = false } // NOTE use React Query, Provider, RTK!
function ChatDetail({ filterDateData, isLoading = false }) {
  const [data, setData] = useState([]);

  // Demo
  useEffect(function () {
    fetch("http://localhost:9000/messages")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main className="bg-zinc-900 text-zinc-50 py-3 flex flex-col gap-3 overflow-y-auto min-h-[310px]">
      <MessageLists data={botMessage} />

      {/* spinner */}
      {isLoading && (
        <div className="flex justify-end">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}

      {data.length > 0 && (
        <>
          {/* filterDateData.map(data => <MessageLists data={data}/>) */}
          <MessageLists data={data} />
          <MessageLists data={data} />
        </>
      )}
    </main>
  );
}

export default ChatDetail;
