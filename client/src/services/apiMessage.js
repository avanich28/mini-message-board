export async function getMessages() {
  const res = await fetch(``);
  const data = await res.json();

  return data;
}

export async function createMessage(data) {
  await fetch(``);
}
