/**
 * Display the home page
 * @return { HTMLElement }
 */

import './home.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import SimpleCustomSelect from '@greg-dev/simple-custom-select';
import saveEmployee from '../../utils/saveEmployee.js';
import Modal from '../../components/Modal';
import FormInput from '../../components/FormInput';
import Datas from '../../datas/states.json'
import { updateEmployeeList } from '../../store/store';


  function Home() {
    const [modalOn, setModalOn] = useState(false);
    const dispatch = useDispatch();
    
    async function handleSubmit(e) {   
        e.preventDefault();
        const newEmployee = await saveEmployee();
        console.log(newEmployee)
        dispatch(updateEmployeeList(newEmployee));
        setModalOn(true);
        }

        //start-date input show today's date by default
        useEffect(() => {
           document.getElementById('start-date').valueAsDate = new Date();
        }, [])       
        

    return (
        <main>
        <div className="container">
            <div className="home-nav">
                <Link to="/employee-list" className="link-button">View Current Employees</Link>
            </div>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" className="create-employee">
                <FormInput name="first-name" label="First Name" type="text"/>
                <FormInput name="last-name" label="Last Name" type="text"/>
                <FormInput name="date-of-birth" label="Date of Birth" type="date"/>
                <FormInput name="start-date" label="Start Date" type="date"/>

                <fieldset className="address">
                    <legend>Address</legend>
                    <FormInput name="street" label="Street" type="text"/>
                    <FormInput name="city" label="City" type="text"/>
                    <label htmlFor="state">State</label>
                    <SimpleCustomSelect options={Datas} name="state"/>
                    <FormInput name="zip-code" label="Zip Code" type="number"/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <SimpleCustomSelect options={["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]} name="department"/>
                <div  className="employee-list-submit">
                    <button type="submit" className="link-button"  onClick={handleSubmit}>Save</button>
                </div>
            </form>

        </div>
            <Modal text="Employee Created!" modalOn={modalOn} setModalOn={setModalOn}/>
        </main>
    );
 }
 
 export default Home;