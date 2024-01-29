import { MessageProvider } from "./context/MessageContext";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <MessageProvider>
      <AppLayout />
    </MessageProvider>
  );
}

export default App;
