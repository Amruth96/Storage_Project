import { useState } from "react";

const Storage = () => {
  
    const [userName, setUserName] = useState('');  
    const [employeeId, SetEmployeeId] = useState(''); 

    const handleUserName = () => {
        sessionStorage.setItem('name', userName); // Save to sessionStorage
        alert("Saved username into sessionStorage"); 
    }

    const handleEmployeeId = () => {
        sessionStorage.setItem('employeeId', employeeId); // Save to sessionStorage
        alert("Saved employeeId into sessionStorage"); 
    }

    const handleClear = () => {
        sessionStorage.clear(); // Clear sessionStorage
        alert("All data cleared from sessionStorage"); 
    }

    const deleteOneItem = () => {
        sessionStorage.removeItem('name'); // Remove specific item from sessionStorage
        alert("Removed name from sessionStorage"); 
    }

    const getValue = sessionStorage.getItem('name'); // Get value from sessionStorage

    return (
        <div>
            <input 
                type="text"
                value={userName} 
                placeholder="Enter your name" 
                onChange={(e) => setUserName(e.target.value)} 
            />
            <button onClick={handleUserName}>Save Username</button> 
            <br/>

            <input 
                type="text"
                value={employeeId} 
                placeholder="Enter your EmployeeId" 
                onChange={(e) => SetEmployeeId(e.target.value)} 
            />
            <button onClick={handleEmployeeId}>Save EmployeeId</button> 
            <p>Username: {userName}</p> 
            <p>Getting value from sessionStorage: {getValue}</p> 
            <br/>
            
            <button onClick={handleClear}>Clear sessionStorage</button>
            <br/>
           
            <button onClick={deleteOneItem}>Clear one item from sessionStorage</button>
        </div>
    );
}

export default Storage;
