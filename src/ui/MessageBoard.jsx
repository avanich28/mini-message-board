import ChatDetail from "./ChatDetail";
import ChatRoomName from "./ChatRoomName";
import InputMessage from "./InputMessage";

function MessageBoard() {
  return (
    <main className="h-full mt-7 mb-3 w-full max-w-[600px] flex flex-col justify-between rounded-2xl overflow-hidden [&>*]:px-4">
      <ChatRoomName />
      <ChatDetail />
      <InputMessage />
    </main>
  );
}

export default MessageBoard;
