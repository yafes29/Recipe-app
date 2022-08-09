import React from 'react'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light p-2 "

            >
                <div className="container-fluid h4 ">

                    <NavLink className="navbar-brand text-secondary" style={{fontSize : "25px"}} to="/">Clarusway Recipe</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end me-4 h4 " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active text-secondary" to="/about" >About</NavLink>
                            <a className="nav-link text-secondary" href="https://github.com/yafes29">Github</a>
                            <NavLink className="nav-link text-secondary" to="/">Logout</NavLink >
                            <NavLink className="nav-link text-secondary" to="/register">Register</NavLink >

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar