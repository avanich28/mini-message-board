import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MessageProvider } from "./context/MessageContext";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MessageProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppLayout />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontSize: "16px",
              padding: "16px 24px",
            },
          }}
        />
      </MessageProvider>
    </QueryClientProvider>
  );
}

export default App;
