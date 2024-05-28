import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  try {
    const data = await kv.get("newsdata");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve data" });
  }
}
