import { API_URL } from "../utils/constants";

export async function getAllMessages() {
  const res = await fetch(`${API_URL}`, { mode: "no-cors" });
  if (!res.ok) throw new Error("Failed getting messages");
  console.log(res);

  const data = await res.json();
  console.log(data);

  return data.data.allMessages;
}

export async function createMessage(newMessage) {
  try {
    const res = await fetch(`${API_URL}`, {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed creating your message");
  } catch (err) {
    throw Error("Failed creating your message");
  }
}
