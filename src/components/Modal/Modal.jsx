
import React from 'react';
import ReactDOM from 'react-dom';
import { FaCross } from 'react-icons/fa'; 
import "./Modal.css"
const Modal = (props) => {
  return ReactDOM.createPortal (
    <div className="modal-backdrop active">
        <div className='modal-content'>
            <div className='modal-close'>
                <button className='btn-outline' style={{borderColor:"red",padding:"0",width:"50px"}} onClick={props.onClose}>
                    X
                </button>
            </div>
            {props.children}
        </div>
    </div>,document.getElementById("modal")
  )
}

export default Modal