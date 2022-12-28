/**
 * Display the home page
 * @return { HTMLElement }
 */

// import './home.css';
import { Link } from 'react-router-dom'


  function EmployeeList() {

    return (
        <main>
        <div className="container">
            <Link  className="link-button" to="/">Home</Link>
        </div>
        </main>
    );
 }
 
 export default EmployeeList;