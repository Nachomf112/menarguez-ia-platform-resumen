"use client";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([{ role: "assistant", content: "👋 Hola Nacho, ¿en qué puedo ayudarte hoy?" }]);
  const [input, setInput] = useState("");

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let aiResponse = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      aiResponse += decoder.decode(value);
      setMessages([...newMessages, { role: "assistant", content: aiResponse }]);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">💬 Asistente IA</h2>
      <div className="border border-[#1f2a44] rounded-2xl p-4 h-[400px] overflow-y-auto bg-[#0f1629] mb-4">
        {messages.map((m, i) => (
          <p key={i} className={m.role === "user" ? "text-blue-300 text-right" : "text-gray-200"}>
            {m.role === "user" ? "🧑‍💻 " : "🤖 "} {m.content}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 bg-[#0a1020] border border-[#1f2a44] rounded-xl p-3 text-gray-100"
        />
        <button className="px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold">
          Enviar
        </button>
      </form>
    </div>
  );
}
