import Message from "./Message";

function ChatDetail() {
  return (
    <main className="bg-zinc-900 text-zinc-50 h-full py-3 flex flex-col gap-3 overflow-y-auto">
      <Message name="Botty" message="Welcome to my chat room!" profile={true} />
      <Message name="Job" message="Happy" />
      <Message
        name="Joy"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere, illo ipsum, ducimus praesentium reprehenderit nisi atque facilis consequuntur dolore et magni asperiores tenetur officia molestiae fugiat nemo suscipit quas."
      />
    </main>
  );
}

export default ChatDetail;
