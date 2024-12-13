import _ from "lodash";
import { User, DepartmentSummary } from "./index";

// Change from arrow function to named function
export function generateDepartmentSummary(users: User[]): DepartmentSummary {
  // Group users by department first
  const groupedByDepartment = _.groupBy(
    users,
    (user) => user.company.department
  );

  const summary: DepartmentSummary = {};

  // Process each department
  Object.entries(groupedByDepartment).forEach(
    ([department, departmentUsers]) => {
      // Gender count
      const genderCount = _.countBy(departmentUsers, "gender");

      // Age range calculation
      const ages = departmentUsers.map((user) => user.age);
      const minAge = Math.min(...ages);
      const maxAge = Math.max(...ages);

      // Hair color count
      const hairColors = _.countBy(departmentUsers, (user) => user.hair.color);

      // Address mapping
      const addressMap = departmentUsers.reduce((acc, user) => {
        const fullName = `${user.firstName}${user.lastName}`;
        acc[fullName] = user.address.postalCode;
        return acc;
      }, {} as { [key: string]: string });

      // Construct department summary
      summary[department] = {
        male: genderCount["male"] || 0,
        female: genderCount["female"] || 0,
        ageRange: `${minAge}-${maxAge}`,
        hair: hairColors,
        addressUser: addressMap,
      };
    }
  );

  return summary;
}
