export default defineEventHandler(async (event) => {
  try {
    const storage = useStorage("data");
    const keys = (await storage.getKeys()) as Array<string>;
    console.log(keys);
    return { keys };
  } catch (error) {
    console.log(error);
    return [];
  }
});
