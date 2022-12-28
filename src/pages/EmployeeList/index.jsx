/**
 * Display the home page
 * @return { HTMLElement }
 */

// import './home.css';
import { Link } from 'react-router-dom'
import Table from '../../components/Table';


  function EmployeeList() {

    return (
        <main>
        <div className="container">
          <h1>Current Employee</h1>
            <Table />
            <Link  className="link-button" to="/">Home</Link>
        </div>
        </main>
    );
 }
 
 export default EmployeeList;