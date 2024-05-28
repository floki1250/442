import { kv } from "@vercel/kv";
import fetch from "node-fetch";

export default async function handler(req, res) {
  const url =
    "https://football-news-aggregator-live.p.rapidapi.com/news/onefootball";
  const config = {
    headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
      "X-RapidAPI-Host": process.env.X_RapidAPI_Host,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    await kv.set("newsdata", data);
    res.status(200).json({ message: "Data fetched and stored successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
}
