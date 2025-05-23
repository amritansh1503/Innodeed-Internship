import React from "react";

export default function Contact({ contact }) {
  const contactItems = [
    { icon: "✉️", label: "amrittripathi1503@gmail.com", value: contact.mailid },
    { icon: "📞", label: "+91-7999757480", value: contact.phone },
    { icon: "🐙", label: "GitHub", value: contact.github },
    { icon: "🔗", label: "LinkedIn", value: contact.linkedin },
  ];

  return (
    <div
      style={{
        color: "#1F2937",
        padding: "2rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#0D9488",
          marginBottom: "1rem",
        }}
      >
        Contact
      </h3>
      <hr style={{ borderTop: "2px solid #D1D5DB", marginBottom: "1rem" }} />
      {contactItems.map((item, index) => (
        <p
          key={index}
          style={{
            marginBottom: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "0.5rem", fontSize: "1.25rem" }}>
            {item.icon}
          </span>
          <a
            href={item.value}
            style={{
              color: "#0D9488",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#F87171")}
            onMouseOut={(e) => (e.target.style.color = "#0D9488")}
          >
            {item.label}
          </a>
        </p>
      ))}
    </div>
  );
}
