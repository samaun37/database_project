import { useState, useEffect } from 'react';
import EmployeeList from '../components/employees/EmployeeList';
/*
const dummy = [
  {
    id: 'm1',
    Name: 'This is a first',
    Age: '33',
    Department: 'M',
    Salary: '34k',
  },
  {
    id: 'm2',
    Name: 'This is a second',
    Age: '23',
    Department: 'M',
    Salary: '32k',
  },
];
*/
function AllrecordsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedemps, setLoadedemps] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://employeesalary-e4db9-default-rtdb.firebaseio.com/employees.json'
    ).then((response) => {
        return response.json();
      })
      .then((data) => {
        const emps = [];

        for (const key in data) {
          const emp = {
            id: key,
            ...data[key]
          };
          emps.push(emp);
        }

        setIsLoading(false);
        setLoadedemps(emps);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    );
  }
/// dummy works but loadedemps doesn't. but it gets the number of data correct but cant show

  return (
    <section>
      <h1>All Records</h1>
      <EmployeeList emps={loadedemps} />
    </section>
  );
}

export default AllrecordsPage;