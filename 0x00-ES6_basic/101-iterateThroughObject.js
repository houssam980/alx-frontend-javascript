export default function iterateThroughObject(reportWithIterator) {
    let employeeStr = '';
  
    reportWithIterator.forEach((employee, idx) => {
        employeeStr += employee;
  
      if (idx !== reportWithIterator.length - 1) {
        employeeStr += ' | ';
      }
    });
  
    return employeeStr;
  }
