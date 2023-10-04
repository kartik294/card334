import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const skills = [
  {
    skill: "HTML CSS",
    level: "Intermediate",
    color: "#2662EA",
    emoji: "💻"
  },
  {
    skill: "Javascript",
    level: "Intermediate",
    color: "#EFD81D",
    emoji: "🚀"
  },
  {
    skill: "Web Design",
    level: "Basic",
    color: "#C3CDAF",
    emoji: "🎨"
  },
  {
    skill: "Git and Github",
    level: "Intermediate",
    color: "#E84F33",
    emoji: "✈"
  },
  {
    skill: "React",
    level: "Basic",
    color: "#60DAFB",
    emoji: "🐙"
  }
];

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="kartik.jpg"
      alt="kartik kaushik"
      width="100"
      height="330"
    />
  );
}

function Intro() {
  // Add content for Intro
  return (
    <div>
      <h1> Kartik kaushik</h1>
      <p>
        Passionate to become a front-end developer. I have learned skills like
        HTML, CSS, Javascript, and currently started with ReactJS.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          emoji={skill.emoji}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level, emoji }) {
  // Define emojis for different skill levels
  const beginnerEmoji = "👶";
  const intermediateEmoji = "🚀";

  // Render the appropriate emoji based on the level prop
  const renderEmoji = () => {
    if (level === "Basic") {
      return beginnerEmoji;
    } else if (level === "Intermediate") {
      return intermediateEmoji;
    } else {
      return null; // Return null if no match
    }
  };

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{renderEmoji()}</span>
      <span>{emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
