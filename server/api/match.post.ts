export default eventHandler(async (event) => {
  const body = await readBody(event);
  const storage = useStorage("data");
  await storage.setItem(body?.code, body);
  return {
    code: body?.code,
  };
});
