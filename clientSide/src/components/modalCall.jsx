import React from 'react'
import dialogAvatar from '../utils/images/dialogAvatar.png'
import rejectCall from '../utils/images/rejectCall.png'

const ModalCall = ({ closeDialogModal }) => {

    const rejectCallFunction = () => {
        closeDialogModal()
    }

  return (
    <div className="dialog_wrapper">
  <div className="dialog_content">
    <p className="dialog_title">Calling</p>
    <div className="dialog_image_container">
      <img className='dialog_button_image' src={dialogAvatar} />
    </div>
    <div className="dialog_button_container">
      <button className="dialog_reject_call_button" onClick={rejectCallFunction}>
        <img className='dialog_button_image' src={rejectCall} />
      </button>
    </div>
  </div>
</div>

)
}

export default ModalCall