export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const storage = useStorage("data");
  let data = (await storage.getItem(
    query.code ? query.code.toString() : ""
  )) as JSON;
  return data;
});
