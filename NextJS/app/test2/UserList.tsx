import React, { useState, useEffect } from "react";
import { DepartmentSummary } from "./index";
import { fetchUsers } from "./userService";
import { generateDepartmentSummary } from "./departSumUnit";
import DepartmentSummaryComponent from "./DepartSum";

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
    <div className="flex justify-center">
      <DepartmentSummaryComponent summary={departmentSummary} />
    </div>
  );
};

export default UserList;
