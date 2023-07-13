import React from 'react'


import sendMessageButton from "../utils/images/sendMessageButton.png";
const ChatContainer = () => {
  return (
    <div className='messenger_container'>
            <div className='messages_container' id='messages_container'></div>
            <div className='new_message_container' id='new_message'>
                <input className='new_message_input' id='new_message_input' type='text' placeholder="Type your message..."></input>
                <button className='send_message_button' id='send_message_button'>
                    <img className='send_message_button_image' src={sendMessageButton}/>
                </button>
            </div>
    </div>
    
  )
}

export default ChatContainer