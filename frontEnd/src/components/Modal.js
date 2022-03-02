import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CHECK } from '../redux/constants/action-Types';

function Modal(props) {
    const dispatch = useDispatch();
    const location = useLocation();

    function check() {
        if (props.trigger)
            document.getElementById("btn").click();

    }

    useEffect(() => {
        check();
    }, [props.trigger]);


    return <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.message}</h5>

                    </div>
                    <div className="modal-footer">

                        <button type="button" className='btn btn-primary' data-bs-dismiss="modal" onClick={function () {
                            dispatch({ type: CHECK, payload: true });
                            function runn() {
                                if (location.pathname !== "/auth")
                                    props.setsuccess(false);
                            }
                            runn();
                        }}>OK</button>

                    </div>
                </div>
            </div>
        </div>

        <button id="btn" style={{ display: "none" }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

        </button>

    </div>;
}

export default Modal;
