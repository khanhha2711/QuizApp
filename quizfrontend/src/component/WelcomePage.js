import React from 'react';

const WelcomePage = ({ onStart }) => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
<img src="/logo512.png" alt="Logo" style={{ width: 80, height: 80 }} />      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to React Quiz!</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        Test your React knowledge with fun questions.
      </p>
      <button
        onClick={onStart}
        style={{
          fontSize: "1.5rem",
          padding: "15px 40px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#61dafb",
          color: "#282c34",
          fontWeight: "bold",
          transition: "background-color 0.3s ease"
        }}
        onMouseEnter={e => e.target.style.backgroundColor = "#21a1f1"}
        onMouseLeave={e => e.target.style.backgroundColor = "#61dafb"}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomePage;
