import React from "react";
function Keypad(){
    function handleChange(){
        console.log("Entering password...")
    }
    return (  
<form>
    <input type="password" onChange={handleChange}/>
</form>
    );
}
export default Keypad;