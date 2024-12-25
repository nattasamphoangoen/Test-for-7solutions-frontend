import _ from "lodash";
import { User, DepartmentSummary } from "./index";

export function generateDepartmentSummary(users: User[]): DepartmentSummary {
  const groupedByDepartment = _.groupBy(
    users,
    (user) => user.company.department
  );

  const summary: DepartmentSummary = {};

  Object.entries(groupedByDepartment).forEach(
    ([department, departmentUsers]) => {
      const genderCount = _.countBy(departmentUsers, "gender");

      const ages = departmentUsers.map((user) => user.age);
      const minAge = Math.min(...ages);
      const maxAge = Math.max(...ages);

      const hairColors = _.countBy(departmentUsers, (user) => user.hair.color);

      const addressMap = departmentUsers.reduce((acc, user) => {
        const fullName = `${user.firstName}${user.lastName}`;
        acc[fullName] = user.address.postalCode;
        return acc;
      }, {} as { [key: string]: string });

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
