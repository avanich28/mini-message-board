import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MessageProvider } from "./context/MessageContext";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <MessageProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppLayout />
      </QueryClientProvider>
    </MessageProvider>
  );
}

export default App;
