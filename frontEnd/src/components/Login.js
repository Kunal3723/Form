import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signIn } from "../redux/actions/auth.js";
import Modal from './Modal.js';

function Login() {


    const initial = {
        email: "",
        password: ""
    }
    const [userData, setuserData] = useState(initial);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(signIn(userData, navigate));

    }
    return (
        <div className='d-flex justify-content-center my-5'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={function (e) {
                        setuserData({ ...userData, email: e.target.value })
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={function (e) {
                        setuserData({ ...userData, password: e.target.value })
                    }} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={function (e) { handleSubmit(e); }}>Login</button>
            </form>

        </div>
    )
}

export default Login