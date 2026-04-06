import React from "react";
import { AbsoluteFill } from "remotion";

export interface OGImageProps {
  title: string;
  tags: string[];
  date: string;
  author: string;
  siteUrl: string;
}

export const OGImage: React.FC<OGImageProps> = ({
  title,
  tags,
  date,
  author,
  siteUrl,
}) => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        fontFamily: "'Inter', system-ui, sans-serif",
        padding: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Top: date + tags */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 1 }}>
        <span
          style={{
            color: "#94a3b8",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          {date}
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                color: "#60a5fa",
                fontSize: 18,
                fontWeight: 500,
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
                padding: "6px 14px",
                borderRadius: 20,
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Center: title */}
      <div style={{ zIndex: 1, flex: 1, display: "flex", alignItems: "center" }}>
        <h1
          style={{
            color: "#e4e4e7",
            fontSize: title.length > 60 ? 48 : title.length > 40 ? 56 : 64,
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            margin: 0,
            maxWidth: "90%",
          }}
        >
          {title}
        </h1>
      </div>

      {/* Bottom: author + site */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Avatar circle with initials */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <span
            style={{
              color: "#e4e4e7",
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            {author}
          </span>
        </div>
        <span
          style={{
            color: "#64748b",
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          {siteUrl}
        </span>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6)",
        }}
      />
    </AbsoluteFill>
  );
};
