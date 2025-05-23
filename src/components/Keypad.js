// Code Keypad Component Here
import { useState } from 'react';

function Keypad (){
    const [password, setPassword] = useState('');
    
    function handleChange (event) {
        setPassword(event.target.value);
        console.log('Entering password...');
    }
    return (
        <div>
            <input 
            type="password" 
            value={password}
            placeholder="Enter your password"
            onChange= {handleChange} 
            />
        </div>
    )
}

export default Keypad;