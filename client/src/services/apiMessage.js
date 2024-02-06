import { API_URL } from "../utils/constants";

export async function getAllMessages() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw Error("Failed getting messages");

  const data = await res.json();

  return data.data.allMessages;
}

export async function createMessage(newMessage) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed creating your message");
  }
}
