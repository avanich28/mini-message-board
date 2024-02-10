import { API_URL } from "../utils/constants";

export async function getAllMessages() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed getting messages");

    const data = await res.json();

    return data.data.allMessages;
  } catch (err) {
    console.error(err);
  }
}

export async function createMessage(newMessage) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed creating your message");

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
