export default function createIteratorObject(report) {
    const employeesI = [];
    for (const department in report.all_Employees) {
      if (department in report.allEmployees) {
        employeesI.push(...report.all_Employees[department]);
      }
    }
    return employeesI;
  }
