import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getAllInfo } from '../redux/actions/info';
import Modal from './Modal';
import Single_User from './Single_User';

function Users() {

  const navigate = useNavigate();
  const user = localStorage.getItem("profile");
  const data = useSelector((state) => state.info);
  const trigger = true;

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
   

  }, [])
  

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.length ?
            data.map(function (single_data) {
              return (
                <tr key={single_data._id}>
                  <Single_User username={single_data.username} mobile={single_data.mobile} address={single_data.address}
                    email={single_data.email} id={single_data._id} />
                </tr>
              )
            }) : null
          }

        </tbody>
      </table>
    </div>
  )
}

export default Users