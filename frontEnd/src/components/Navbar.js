import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import decode from "jwt-decode";
import { useLocation } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

    useEffect(() => {
        if (!user) {
            navigate("/auth");
        }
    }, [])

    function logout() {
        localStorage.clear();
        navigate("/auth");
    }

    useEffect(() => {

        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setuser(JSON.parse(localStorage.getItem("profile")));
    }, [location])
    
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Nemesis</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active`} to="/users">Users Data</Link>
                        </li>


                    </ul>
                    <button className="btn btn-primary" onClick={function () { logout() }}>Logout</button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar