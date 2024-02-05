import { API_URL } from "../utils/constants";

export async function getAllMessages() {
  const res = await fetch(`${API_URL}`);
  // if (res.status === "failed") throw Error("Failed getting menu");
  // console.log(res);
  const data = await res.json();
  console.log(data);

  return data;
}
getAllMessages();

export async function createMessage(newMessage) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {}
}
