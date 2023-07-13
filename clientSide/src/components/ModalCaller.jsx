import React from 'react'
import acceptCall from '../utils/images/acceptCall.png'
import rejectCall from '../utils/images/rejectCall.png'
import dialogAvatar from '../utils/images/dialogAvatar.png'
const ModalCaller = ({ closeDialogModalCallee, strangerCode, callTypes }) => {
    
    const rejectCallHandler = () => {
        closeDialogModalCallee()
    }


  return (
    <div className="dialog_wrapper">
        <div className="dialog_content">
            <p className="dialog_title">Incoming {callTypes}</p>
            <p className="dialog_title">From : {strangerCode} </p>
            <div className="dialog_image_container">
                <img src={dialogAvatar} />
            </div>
            <div className="dialog_button_container">
                <button className="dialog_accept_call_button">
                    <img className="dialog_button_image" src={acceptCall} />
                </button>
                <button className="dialog_reject_call_button" onClick={rejectCallHandler}>
                    <img className="dialog_button_image" src={rejectCall} />
                </button>
            </div>
        </div>
</div>

  )
}

export default ModalCaller