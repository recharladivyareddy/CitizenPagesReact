import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTog"
                    aria-controls="navbarTog">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">{props.title}</a>

                <div className="collapse navbar-collapse" id="navbarTog">
                    <ul className="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#" >New Vec Reg Application</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" >New License Application</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" >New Permit Application</a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">LogOut</a>
                        </li>

                    </ul>
                    {props.searchBar ? <form className='d-flex'>
                        <input className='form-control me-2' type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" >Search</button>
                    </form> : "no search bar"}
                </div>
            </div>
        </nav>

    )
}

Header.defaultProps = {
    title: "Your title here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}