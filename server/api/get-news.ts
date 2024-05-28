export default defineEventHandler(async (event) => {
  const storage = useStorage("data");
  let data = (await storage.getItem("news")) as JSON;
  return data;
});
