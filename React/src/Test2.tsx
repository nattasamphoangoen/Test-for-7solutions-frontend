import React from "react";
import UserList from "./Test2/UserList";

const Test2: React.FC = () => {
  return (
    <div
      style={{
        margin: "1rem",
        width: "50%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>2. Create data from API (OPTIONAL)</div>
        <button
          style={{
            padding: "5px 10px 8px 10px",
            borderRadius: "10px",
            border: "1px solid #ffffff",
          }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Home
        </button>
      </div>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default Test2;
