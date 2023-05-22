import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 


const Login = () => {

    const history = useNavigate();

    const [inpval,setInpval] = useState({
        email:"",
        password:"",
})   

const[data,setData] =useState([]);

console.log(inpval);

const getdata = (e) =>{
    // console.log(e.target.value);

    const {value,name} = e.target;
    // console.log(value,name);

    setInpval(()=>{
        return{
            ...inpval,
            [name]:value
        }
    })


}


const addData = (e)=>{
    e.preventDefault();

    const getuserArr =localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const {email,password} = inpval;
    
    if (email === ""){
        alert("email field is required")
    }else if(password ===""){
        alert("password field is required")
    }else if(!email.includes("@")){
        alert("enter valid email")
     }
    else {
        if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr);
            const userlogin = userdata.filter((el,k)=>{
                return el.email === email && el.password === password
            });

            // console.log(userlogin);


            if(userlogin.length === 0){
                alert("invalid details")
            }else{
                console.log("user login succesfully");
                history("/Detail")
            }
        }
    }
}

  return (
<>
<div className="container mt-3">
    <section>
        <div className="left_data mt-3">
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={addData} type="submit">
        Submit
      </Button>
      <p className="mt-3">Don't have an account <span><NavLink to="/Home">Sign up</NavLink></span></p>

    </Form>
        </div>

        <div className="right_data"></div>
    </section>
   </div>
</>
  )
}

export default Login
