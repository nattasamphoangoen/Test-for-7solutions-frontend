import React, { useState, useEffect } from "react";
import { DepartmentSummary } from "./index";
import { fetchUsers } from "./userService";
import { generateDepartmentSummary } from "./departmentSummaryUnit";
import DepartmentSummaryComponent from "./DepartmentSummary";

const UserList: React.FC = () => {
  const [departmentSummary, setDepartmentSummary] = useState<DepartmentSummary>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const userData = await fetchUsers();

        // Generate department summary directly from fetched users
        const summary = generateDepartmentSummary(userData.users);
        setDepartmentSummary(summary);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DepartmentSummaryComponent summary={departmentSummary} />
    </div>
  );
};

export default UserList;
