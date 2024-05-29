export default eventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const keywords = "Football OR Soccer";
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    keywords
  )}&language=en&apiKey=${config.apiKey}`;
  const data = await $fetch(url);
  return data;
});
