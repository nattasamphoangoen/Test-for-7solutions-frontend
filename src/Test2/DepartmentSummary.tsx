import React from "react";
import { DepartmentSummary as DepartmentSummaryType } from "./index";

interface DepartmentSummaryProps {
  summary: DepartmentSummaryType;
}

const DepartmentSummary: React.FC<DepartmentSummaryProps> = ({ summary }) => {
  // console.log("summary", summary);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        columnGap: "10px",
        rowGap: "10px",
        flexWrap: "wrap",
      }}
    >
      {/* <h2 style={{ margin: "0 0 10px 0", padding: "0" }}>Department</h2> */}
      {Object.entries(summary)
        .sort()
        .map(([department, data]) => (
          <div
            key={department}
            style={{
              margin: "5px",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #029bcf",
              width: "250px",
              gap: "10px",
            }}
          >
            {/* <h3 style={{ margin: "15px 0 0 0", padding: "0" }}>{department}</h3>
            <div style={{ paddingLeft: "20px", margin: "0", paddingTop: "0" }}>
              <p style={{ margin: "0", padding: "0" }}>Male: {data.male}</p>
              <p style={{ margin: "0", padding: "0" }}>Female: {data.female}</p>
              <p style={{ margin: "0", padding: "0" }}>
                ageRange: {data.ageRange}
              </p>
              <h4 style={{ margin: "0", padding: "0" }}>hair:</h4>
              <ul style={{ margin: "0", paddingTop: "0" }}>
                {Object.entries(data.hair).map(([color, count]) => (
                  <li key={color}>
                    {color}: {count}
                  </li>
                ))}
              </ul>
              <h4 style={{ margin: "0", padding: "0" }}>addressUser:</h4>
              <ul style={{ margin: "0", paddingTop: "0" }}>
                {Object.entries(data.addressUser).map(([name, postalCode]) => (
                  <li key={name}>
                    {name}: {postalCode}
                  </li>
                ))}
              </ul>
            </div> */}
            <div style={{ margin: "0", padding: "0" }}>{department}</div>
            <div style={{ marginBottom: "10px" }}>
              <pre style={{ margin: "0", padding: "0" }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DepartmentSummary;
