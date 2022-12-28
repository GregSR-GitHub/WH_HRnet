/**
 * Display the home page
 * @return { HTMLElement }
 */

import './home.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import saveEmployee from '../../utils/saveEmployee.js';
import Datas from '../../datas/states.json'


  function Home() {
    const [modalOn, setModalOn] = useState(false);
    async function handleSubmit(e) {   
        e.preventDefault();
        saveEmployee();
        setModalOn(true);
        console.log(modalOn);
        }

    return (
        <main>
        <div className="container">
            <div className="home-nav">
                <Link to="/employee-list" className="link-button">View Current Employees</Link>
            </div>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" className="create-employee"  onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" className="create-employee-input"/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name"  className="create-employee-input"/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="date"  className="create-employee-input"/>

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="date"  className="create-employee-input"/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text"  className="create-employee-input"/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text"  className="create-employee-input"/>

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"  className="create-employee-input">
                        { Datas.map((element, index) => (<option  key={`${element}-${index}`} value={element.abbreviation}>{element.name}</option>))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" className="create-employee-input" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department"  className="create-employee-input">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <div  className="employee-list-submit">
                    <button type="submit" className="link-button">Save</button>
                    </div>
            </form>

        </div>
        {modalOn?
        <div id="confirmation" className="modal">
            <Link to="/"  className="close-modal" onClick={(e) => setModalOn(false)}>X</Link>
            <span>Employee Created!</span>
        </div>:
        null}
        </main>
    );
 }
 
 export default Home;