import React, { useState, useEffect } from "react";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [name2, setName2] = useState("");

  useEffect(() => {
    fetch("/about.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch about.json");
        return response.json();
      })
      .then((data) => {
        setAboutData(data);
        setName2(data.name);
      })
      .catch((error) => console.error("Error fetching about.json:", error));
  }, []);

  const changeName = () => {
    setName2("Tanshu");
    console.log(1);
  };

  if (!aboutData) {
    return <div style={{ color: "#1F2937", padding: "2rem" }}>Loading...</div>;
  }

  return (
    <div
      style={{
        color: "#1F2937",
        padding: "2rem",
      }}
    >
      <h2
        style={{
          fontSize: "1.875rem",
          fontWeight: "700",
          color: "#0D9488",
          marginBottom: "1rem",
        }}
      >
        About Me
      </h2>
      <hr style={{ borderTop: "2px solid #D1D5DB", marginBottom: "1rem" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
          justifyContent: "left",
        }}
      >
        <p
          style={{
            fontSize: "1.25rem",
            marginRight: "1rem",
            color: "#4B5563",
            textAlign: "left",
          }}
        >
          {name2}
        </p>
        <button
          onClick={changeName}
          style={{
            backgroundColor: "#0D9488",
            color: "#F3F4F6",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            textAlign: "left",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#F87171")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0D9488")}
        >
          Magic
        </button>
      </div>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.5rem",
          color: "#4B5563",
          marginBottom: "1rem",
          textAlign: "left",
        }}
      >
        {aboutData.bio}
      </p>
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#0D9488",
          marginBottom: "1rem",
          textAlign: "left",
        }}
      >
        Education
      </h3>
      {aboutData.education.map((edu, index) => (
        <p
          key={index}
          style={{
            fontSize: "1rem",
            color: "#4B5563",
            marginBottom: "0.5rem",
            textAlign: "left",
          }}
        >
          <strong>{edu.degree}</strong>, {edu.institution}, {edu.duration} (
          {edu.percentage}%)
        </p>
      ))}
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#0D9488",
          marginBottom: "1rem",
          marginTop: "1rem",
          textAlign: "left",
        }}
      >
        Experience
      </h3>
      {aboutData.experience.map((exp, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "#4B5563",
              marginBottom: "0.5rem",
              textAlign: "left",
            }}
          >
            <strong>
              {exp.role}, {exp.company}
            </strong>{" "}
            ({exp.location}), {exp.duration}
          </p>
          <ul
            style={{
              color: "#4B5563",
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              textAlign: "left",
            }}
          >
            {exp.responsibilities.map((resp, idx) => (
              <li
                key={idx}
                style={{ marginBottom: "0.5rem", textAlign: "left" }}
              >
                {resp}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
