"use client";

import { useState } from "react";

type Message = {
  text: string;
  sender: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome to Science Minds Chat 💬", sender: "system" },
    { text: "Ask anything in Math, Physics, or Chemistry!", sender: "system" },
  ]);

  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { text: input, sender: "you" },
    ]);

    setInput("");
  }

  return (
    <main style={styles.container}>
      <h1>💬 Science Minds Chat</h1>

      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf:
                msg.sender === "you" ? "flex-end" : "flex-start",
              backgroundColor:
                msg.sender === "you" ? "#2563eb" : "#e5e7eb",
              color: msg.sender === "you" ? "white" : "black",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />

        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  chatBox: {
    height: "400px",
    border: "1px solid #ddd",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    marginBottom: "10px",
  },
  message: {
    padding: "10px",
    margin: "5px",
    borderRadius: "10px",
    maxWidth: "70%",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};