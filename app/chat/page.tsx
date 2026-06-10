"use client";

import { useEffect, useState } from "react";

type ChatType = "group" | "dm";

type Message = {
  text?: string;
  file?: string;
  type: "text" | "image" | "video" | "audio";
  sender: "me" | "other";
  time: string;
};

type Room = {
  id: string;
  name: string;
  type: ChatType;
};

export default function ChatPage() {
  const [mode, setMode] = useState<ChatType>("group");
  const [activeChat, setActiveChat] = useState("general");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [messages, setMessages] = useState<Record<string, Message[]>>({
    general: [
      {
        text: "Welcome to Bishop’s Deck 💬",
        sender: "other",
        type: "text",
        time: "Today",
      },
    ],
    math: [],
    physics: [],
    chemistry: [],
    john: [],
    mary: [],
  });

  const rooms: Room[] =
    mode === "group"
      ? [
          { id: "general", name: "🌍 General", type: "group" },
          { id: "math", name: "🟥 Math Circle", type: "group" },
          { id: "physics", name: "🔵 Physics Lab", type: "group" },
          { id: "chemistry", name: "🟡 Chemistry Lab", type: "group" },
        ]
      : [
          { id: "john", name: "👤 John", type: "dm" },
          { id: "mary", name: "👤 Mary", type: "dm" },
        ];

  function nowTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function sendMessage(type: Message["type"]) {
    if (type === "text" && text.trim()) {
      const msg: Message = {
        text,
        sender: "me",
        type: "text",
        time: nowTime(),
      };

      setMessages((prev) => ({
        ...prev,
        [activeChat]: [...(prev[activeChat] || []), msg],
      }));

      setText("");
    }

    if (file && type !== "text") {
      const url = URL.createObjectURL(file);

      const msg: Message = {
        file: url,
        type,
        sender: "me",
        time: nowTime(),
      };

      setMessages((prev) => ({
        ...prev,
        [activeChat]: [...(prev[activeChat] || []), msg],
      }));

      setFile(null);
    }
  }

  function renderMessage(msg: Message) {
    return (
      <div
        style={{
          ...styles.messageBubble,
          alignSelf: msg.sender === "me" ? "flex-end" : "flex-start",
          background: msg.sender === "me" ? "#4169e1" : "#111827",
        }}
      >
        {msg.type === "text" && <p>{msg.text}</p>}

        {msg.type === "image" && (
          <img src={msg.file} style={styles.media} />
        )}

        {msg.type === "video" && (
          <video src={msg.file} controls style={styles.media} />
        )}

        {msg.type === "audio" && (
          <audio src={msg.file} controls />
        )}

        <span style={styles.time}>{msg.time}</span>
      </div>
    );
  }

  return (
    <main style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>💬 Bishop’s Deck</h1>
        <p style={styles.subtitle}>
          Science Minds • Chat • Learn • Connect
        </p>
      </div>

      {/* MODE SWITCH */}
      <div style={styles.switch}>
        <button
          onClick={() => setMode("group")}
          style={{
            ...styles.switchBtn,
            background: mode === "group" ? "#4169e1" : "#1f2937",
          }}
        >
          Group Chats
        </button>

        <button
          onClick={() => setMode("dm")}
          style={{
            ...styles.switchBtn,
            background: mode === "dm" ? "#d4af37" : "#1f2937",
            color: mode === "dm" ? "#000" : "white",
          }}
        >
          Direct Messages
        </button>
      </div>

      {/* LAYOUT */}
      <div style={styles.layout}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          {rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => setActiveChat(room.id)}
              style={{
                ...styles.room,
                borderLeft:
                  activeChat === room.id
                    ? "4px solid #d4af37"
                    : "4px solid transparent",
              }}
            >
              {room.name}
            </div>
          ))}
        </div>

        {/* CHAT AREA */}
        <div style={styles.chatArea}>
          <div style={styles.chatBox}>
            {(messages[activeChat] || []).map((msg, i) => (
              <div key={i}>{renderMessage(msg)}</div>
            ))}
          </div>

          {/* INPUT */}
          <div style={styles.inputBox}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type message..."
              style={styles.input}
            />

            <input
              type="file"
              accept="image/*,video/*,audio/*"
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
            />

            <button
              onClick={() => sendMessage("text")}
              style={styles.sendBtn}
            >
              Send
            </button>

            <button
              onClick={() =>
                sendMessage(
                  file?.type.startsWith("image")
                    ? "image"
                    : file?.type.startsWith("video")
                    ? "video"
                    : "audio"
                )
              }
              style={styles.mediaBtn}
            >
              Send Media
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#02122e,#052b78,#041a45)",
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
  },

  header: {
    textAlign: "center",
    marginBottom: "10px",
  },

  title: {
    color: "#d4af37",
  },

  subtitle: {
    color: "#cbd5e1",
  },

  switch: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
  },

  switchBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    color: "white",
  },

  layout: {
    display: "flex",
    gap: "10px",
  },

  sidebar: {
    width: "30%",
    background: "rgba(0,0,0,.3)",
    borderRadius: "10px",
    padding: "10px",
  },

  room: {
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#111827",
  },

  chatArea: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },

  chatBox: {
    height: "450px",
    overflowY: "auto",
    padding: "10px",
    background: "rgba(0,0,0,.2)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },

  messageBubble: {
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    maxWidth: "70%",
  },

  time: {
    fontSize: "10px",
    opacity: 0.6,
    display: "block",
    marginTop: "5px",
  },

  media: {
    maxWidth: "200px",
    borderRadius: "10px",
  },

  inputBox: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
  },

  sendBtn: {
    background: "#4169e1",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "10px",
  },

  mediaBtn: {
    background: "#d4af37",
    color: "black",
    border: "none",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "bold",
  },
};