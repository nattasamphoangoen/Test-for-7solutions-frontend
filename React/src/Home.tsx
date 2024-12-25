import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      Home
      <div>
        <>
          <div
            style={{
              display: "flex",
              margin: "0",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
              gap: "15px",
              flexDirection: "column",
            }}
          >
            <button
              style={{
                padding: "8px 15px 10px 15px",
                borderRadius: "10px",
                border: "1px solid #029bcf",
              }}
              onClick={() => {
                window.location.href = "/test1";
              }}
            >
              1. Auto Delete Todo List
            </button>
            <button
              style={{
                padding: "8px 15px 10px 15px",
                borderRadius: "10px",
                border: "1px solid #029bcf",
              }}
              onClick={() => {
                window.location.href = "/test2";
              }}
            >
              2. Create data from API (OPTIONAL)
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Home;
