import React from 'react'
import { useDispatch } from 'react-redux';
import { InfoDelete } from '../redux/actions/info';

function Single_User({ username, email, address, mobile, id }) {

    const dispatch = useDispatch();
    
    function handleDelete(id) {
        
        dispatch(InfoDelete(id));
    }
    
    return (
        <>
            <td>{username}</td>
            <td>{mobile}</td>
            <td>{address}</td>
            <td>{email}</td>
            <td><button className="btn" onClick={function () { handleDelete(id) }}><i className="fa fa-trash"></i></button></td>
        </>
    )
}

export default Single_User