import { kv } from "@vercel/kv";
export default eventHandler(async (event) => {
  const body = await readBody(event);
  await kv.set(body?.code, body, { ex: 60 * 60 * 24 * 15 });
  return {
    code: body?.code,
  };
});
