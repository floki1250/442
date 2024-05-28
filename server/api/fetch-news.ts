export default defineEventHandler(async (event) => {
  const runconfig = useRuntimeConfig();
  const url =
    "https://football-news-aggregator-live.p.rapidapi.com/news/onefootball";
  const config = {
    headers: {
      "X-RapidAPI-Key": runconfig.rapidapi.apiUrl,
      "X-RapidAPI-Host": runconfig.rapidapi.apiUrl,
    },
  };

  try {
    const storage = useStorage("data");
    const data = (await $fetch(url, config)) as any;
    await storage.setItem("newsdata", data);
    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
});
