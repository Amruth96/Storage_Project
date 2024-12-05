
import { useState } from "react";


const Storage = () => {
  
    const [userName, setUserName] = useState('');  
    const [employeeId, SetEmployeeId] = useState(''); 

    const handleUserName = () => {
        localStorage.setItem('name', userName); 
        alert("saved username into localstorage"); 
    }


    const handleEmployeeId = () => {
        localStorage.setItem('employeeId', employeeId); 
        alert("saved employeeId into localstorage"); 
    }

    
    const handleClear = () => {
        localStorage.clear(); 
        alert("all data cleared"); 
    }

   
    const deleteOneItem = () => {
        localStorage.removeItem('name'); 
        alert("removed name"); 
    }

  
    const getValue = localStorage.getItem('name'); 

    return (
        <div>
            <input 
                type="text"
                value={userName} 
                placeholder="enter your name" 
                onChange={(e) => setUserName(e.target.value)} 
            />
            <button onClick={handleUserName}>Save Username</button> 
            <br/>

            <input 
                type="text"
                value={employeeId} 
                placeholder="enter your EmployeeId" 
                onChange={(e) => SetEmployeeId(e.target.value)} 
            />
            <button onClick={handleEmployeeId}>Save EmployeeId</button> 
            <p>username : {userName}</p> 
            <p>getting value from localStorage {getValue}</p> 
            <br/>
            
            <button onClick={handleClear}>Clear localStorage</button>
            <br/>
           
            <button onClick={deleteOneItem}>Clear one item</button>
        </div>
    );
}

export default Storage;
