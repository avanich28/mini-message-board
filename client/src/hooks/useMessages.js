import { useQuery } from "@tanstack/react-query";
import { getAllMessages } from "../services/apiMessage";

export function useMessages() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["messages"],
    queryFn: getAllMessages,
  });

  return { isLoading, data, error };
}
