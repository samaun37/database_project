import { Route, Routes } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Newemployeeform from '../components/employees/Newemployeeform';
function AddnewemployeePage() {
  function addnewhandler(employee_data){
    fetch(
      'https://employeesalary-e4db9-default-rtdb.firebaseio.com/employees.json',
      {
        method: 'POST',
        body: JSON.stringify(employee_data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
    return <section>
      <h1>Add New Employee</h1>
      <Newemployeeform addnew={addnewhandler}/>
    </section>
  }
  export default AddnewemployeePage;