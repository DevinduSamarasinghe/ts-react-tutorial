import React, {useState} from 'react'

interface newUserProps {
    role: string,
    name: string,
    email: string
}

const NewUser = () => {
    
    //Type Assertion can be used to tell the compiler that the value is of a specific type
    const [newUser, setNewUser] = useState <newUserProps>({} as newUserProps);
    
    //Now even if we pass an empty object, the object will be of type newUserProps,
    //Therefore the optional question in the return statement will not be required

    



    const handleClick = ()=>{
        const user = {
            role: "admin",
            name: "John",
            email: "john123@gmail.com"
        };
        setNewUser(user);
    }

  return (
    <div>
        <h1>newUser Component</h1>
        <div>
            <button onClick={handleClick}>NewUserImp</button>
        </div>

        <div>
            <span style={{color: "red"}}>Role: {newUser.role}</span>
            <span style={{color: "red"}}>Name: {newUser.name}</span>
            <span style={{color: "red"}}>Email: {newUser.email}</span>
        </div>
        </div>
  )
}

export default NewUser