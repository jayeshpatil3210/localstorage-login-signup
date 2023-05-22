import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom'; 

const Home = () => {

    const [inpval,setInpval] = useState({
        email:"",
        password:"",
        cpassword:""
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

    const {email,password,cpassword} = inpval;
    
    if (email === ""){
        alert("email field is required")
    }else if(password ===""){
        alert("password field is required")
    }else if(!email.includes("@")){
        alert("enter valid email")
     }else if(cpassword ===""){
        alert("password field is required")}
    else {
        console.log("data addeded");

        localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
    }
}

  return (
   <>
   <div className="container mt-3">
    <section>
        <div className="left_data mt-3">
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="cpassword" onChange={getdata} placeholder="confirm Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" onClick={addData} type="submit">
        Submit
      </Button>
      <p className="mt-3">Already have an account <span><NavLink to="/Login">Sign In</NavLink></span></p>

    </Form>
        </div>

        <div className="right_data"></div>
    </section>
   </div>
   </>
  )
}

export default Home
