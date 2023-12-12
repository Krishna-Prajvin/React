import React,{useState} from "react"
const TernaryCondition = () => {
    const[isLoggedin,setIsLoggedIn]=useState(false)
    const handleClick=()=>{
        setIsLoggedIn(!isLoggedin);
    }
    return(
        <div>
            {isLoggedin?
            <p>Home page</p>:
            <p>Login page</p>
            }
            <button onClick={handleClick}>Change state</button>
        </div>
    )
}

export default TernaryCondition;