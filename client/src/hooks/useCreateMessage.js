import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createMessage as createMessageAPI } from "../services/apiMessage";

export function useCreateMessage() {
  const queryClient = useQueryClient();

  const { mutate: createMessage, isLoading: isCreating } = useMutation({
    mutationFn: createMessageAPI,
    onSuccess: () => {
      toast.success("A message is successfully sent.");
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createMessage, isCreating };
}
