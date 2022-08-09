import React from 'react'
import { useNavigate } from 'react-router-dom'
import imag from "../assets/error.jpg"
import "../css/notfound.css"


const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <img className='img' src={imag} alt="" />

      <div className='buton'>
        <button onClick={() => navigate("/")} className='btnn'>Back Home</button>
      </div>
    </div>

  )
}

export default NotFound