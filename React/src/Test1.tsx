import React from "react";
import AutoDeleteTodoList from "./Test1/AutoDeleteTodoList";

const Test1: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ margin: "1rem", width: "50%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>1. Auto Delete Todo List</div>
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
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <AutoDeleteTodoList />
      </div>
    </div>
  );
};

export default Test1;
