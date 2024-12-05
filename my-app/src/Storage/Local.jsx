import { useState } from "react";

const Storage = () => {
  
    const [userName, setUserName] = useState('');   

    const handleUserName = () => {
        localStorage.setItem('name', userName); 
        alert("saved username into localstorage"); 
    }

    const handleClear = () => {
        localStorage.clear(); 
        alert("all data cleared"); 
    }

    return (
        <div>
            <input 
                type="text"
                value={userName} 
                placeholder="enter your name" 
                onChange={(e) => setUserName(e.target.value)} 
            />
            <button onClick={handleUserName}>Save Username</button> 
           
            <p>username : {userName}</p> 
 
            <button onClick={handleClear}>Clear localStorage</button>

        </div>
    );
}

export default Storage;
