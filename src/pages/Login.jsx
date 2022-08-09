import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/login.css"


const Login = () => {

  const userInfo = {
    username: "ahmet",
  }
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo))
    navigate("/");

  }
  return (
    <div className='wrapper'>
      <div className='bgStyle w-100 vh-100 d-flex justify-content-center  mt-5'>

        <form className='w-25 d-flex flex-column v-100 ' onSubmit={handleSubmit}>


          <div className="w-100">

            <label for="exampleInputEmail1" className="form-label fs-5" required  >Email address</label>
            <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 w-100">
            <label for="exampleInputPassword1" className="form-label fs-5" required >Password</label >
            <input type="password" className="form-control" id="exampleInputPassword1" />

          </div>
          <div className='d-flex justify-content-center '>
            <button type="submit" className="btn btn-primary   ">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login