import React, {
    useState, useEffect
} from 'react'
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom'
import { create } from '../redux/actions/info';
import Modal from './Modal';

function Home() {

    const navigate = useNavigate();
    const user = localStorage.getItem("profile");
    const trigger = true;
    const message = "User Added Successfully";

    const initial = {username: "",mobile: "",address: "",email: "" }

    const [formData, setformData] = useState(initial)
    const [isValid, setisValid] = useState({ isUsername: "", isEmail: "", isMobile: "", isAddress: "" });
    const [success, setsuccess] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!user) {
            navigate("/auth");
        }
    }, [])

    function validateUserName(username) {
        var usernameRegex = /^[a-zA-Z0-9]+$/;
        return usernameRegex.test(username);
    }

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }

        return (false)
    }

    function ValidateMobile(inputtxt) {
        var phoneno = /^\d{10}$/;
        if ((inputtxt.match(phoneno))) {
            return true;
        }
        else {

            return false;
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        if (ValidateEmail(formData.email) && ValidateMobile(formData.mobile) && validateUserName(formData.username) && formData.address !== "") {
            dispatch(create(formData));
            setsuccess(true);
            setformData(initial);
            setisValid({ isUsername: "", isEmail: "", isMobile: "", isAddress: "" })

        }
        else {

            if (!ValidateEmail(formData.email)) {
                setisValid({ ...isValid, isEmail: "is-invalid" });
            }
            if (!ValidateMobile(formData.mobile)) {
                setisValid({ ...isValid, isMobile: "is-invalid" });
            }
            if (!validateUserName(formData.username)) {
                setisValid({ ...isValid, isUsername: "is-invalid" });
            }
            if (formData.address === "") {
                setisValid({ ...isValid, isAddress: "is-invalid" });
            }
        }
    }

    return (
        <>
        <div className='d-flex justify-content-center my-3'>
            <h2>Enter User Details</h2>
            </div>
        <div className='d-flex justify-content-center my-3'>
            
            <form>
                <div className="mb-3">
                    <label htmlFor="validationServer01" className="form-label">Username</label>
                    <input type="text" value={formData.username} className={`form-control ${isValid.isUsername}`} id="validationServer01" onChange={function (e) {
                        setformData({ ...formData, username: e.target.value })
                    }} required />
                    <div className="invalid-feedback">
                        Username must be alpha-numeric with no space!
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="validationServer03" className="form-label">Addres</label>
                    <input type="text" value={formData.address} className={`form-control ${isValid.isAddress}`} id="validationServer03" aria-describedby="validationServer03Feedback" onChange={function (e) {
                        setformData({ ...formData, address: e.target.value })
                    }} required />
                    <div id="validationServer03Feedback" className="invalid-feedback">
                        Address can't be blank!
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="validationServer40" className="form-label">Phone Number</label>
                    <input type="text" value={formData.mobile} className={`form-control ${isValid.isMobile}`} id="validationServer04" onChange={function (e) {
                        setformData({ ...formData, mobile: e.target.value })
                    }} required />
                    <div className="invalid-feedback">
                        Phone number must be 10 digits!
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="validationServer05" className="form-label">Email</label>
                    <input type="text" value={formData.email} className={`form-control ${isValid.isEmail}`} id="validationServer05" onChange={function (e) {
                        setformData({ ...formData, email: e.target.value })
                    }} required />
                    <div className="invalid-feedback">
                        Enter valid email id!
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={function (e) { handleSubmit(e); }}>Submit</button>
            </form>
            {success && <Modal trigger={trigger} message={message} setsuccess={setsuccess} />}
        </div>
        </>
    )
}

export default Home