import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { messages, provider = process.env.NEXT_PUBLIC_MODEL_PROVIDER } = await req.json();

  if (provider === "ollama") {
    const r = await fetch(`${process.env.OLLAMA_BASE_URL}/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "qwen2.5:14b", messages, stream: true }),
    });
    return new Response(r.body, { headers: { "Content-Type": "text/event-stream" } });
  }

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({ model: "gpt-4.1-mini", messages, stream: true }),
  });

  return new Response(r.body, { headers: { "Content-Type": "text/event-stream" } });
}
