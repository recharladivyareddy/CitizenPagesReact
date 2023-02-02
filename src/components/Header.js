import React from 'react';
import { Link  } from 'react-router-dom';

export default function Header() {
  return <div className="fixed-top header">
    
    <nav className="navbar  navbar-expand-lg  navbar-dark ">
      <div className="container-fluid ">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTog"
          aria-controls="navbarTog">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="">Road Transport Dept  <i className="fa-solid fa-road"></i></a>
        <div className="navbar-collapse collapse" id="navbarTog">
          <ul className="navbar-nav ms-auto">
          

            <li className="nav-item">
              <Link className='nav-link header'  to='/Applyrc' target="_blank" style={{margin: "10px"}}>New Vec Reg Application </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header" to='/Applylic' target="_blank" style={{margin:"10px"}}>New License Application</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header" to='/Applyper' target="_blank" style={{margin:"10px"}}>New Permit Application</Link>
            </li> 

        
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to='/Citizen'><i style={{margin:"10px"}}
                  className="fa-solid fa-house-user"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Login'><i style={{margin:"10px"}}
                  className="fa-solid fa-right-from-bracket"></i>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    </div>
  
}
