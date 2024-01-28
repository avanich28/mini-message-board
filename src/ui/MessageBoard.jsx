import ChatDetail from "./ChatDetail";
import ChatRoomName from "./ChatRoomName";
import InputMessage from "./InputMessage";

function MessageBoard() {
  return (
    <main className="mt-2 w-full max-w-[600px] flex flex-col justify-center [&>*]:px-4 h-full min-h-0">
      <ChatRoomName />
      <ChatDetail />
      <InputMessage />
    </main>
  );
}

export default MessageBoard;
