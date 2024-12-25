import React from "react";
import { DepartmentSummary as DepartmentSummaryType } from "./index";

interface DepartmentSummaryProps {
  summary: DepartmentSummaryType;
}

const DepartmentSummary: React.FC<DepartmentSummaryProps> = ({ summary }) => {
  return (
    <div className="flex flex-wrap justify-center flex-row w-[100%] md:w-[80%]">
      {Object.entries(summary)
        .sort()
        .map(([department, data]) => (
          <div
            key={department}
            className="p-2 m-2 rounded-xl border border-[#029bcf] w-[300px] gap-10"
          >
            <div className="m-0 p-0 ">{department}</div>
            <div className="mb-1">
              <pre className="m-0 p-0 ">{JSON.stringify(data, null, 2)}</pre>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DepartmentSummary;
