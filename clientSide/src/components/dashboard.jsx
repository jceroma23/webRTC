import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
// IMages
import logo from '../utils/images/logo.png';
import copyButton from '../utils/images/copyButton.png';
import chatButton from '../utils/images/chatButton.png';
import videoButton from '../utils/images/videoButton.png';
import check from '../utils/images/check.png';



const Dashboard = ({ socketID, socket, openDialogModal }) => {
// This will Handle Copy Button to Clipboard
// Need to fix logic
    const [ clipboardValue, SetClipBoardValue ] = useState("");
    const [ copied, setCopied ] = useState(false);
    const [ socketIdGetter, setSocketIdGetter ] = useState("Getting SocketID")
    useEffect(() => {
        if (socketID != null) {
            setSocketIdGetter(socketID);
        }
    });
    const copyClickHandler = () => {
        SetClipBoardValue(socketIdGetter)
        console.log(clipboardValue);
    }


// Handle Send Preoffer Chat
    const [ strangerCode, setStrangerCode ] = useState('')
    const [ callType, SetCallType ] = useState("")
//This will handle Call Type
    
    const sendPreOfferHandler = () => {
        if (callType != '' || strangerCode != '' ) {
            console.log('This type is ' + callType)
            console.log('This Code is Stranger: '+ strangerCode)  
            const dataCallType = { callType, strangerCode }
            socket.emit('pre-offer', dataCallType)
        }      
    }

// This will handle the state change before calling the function

    useEffect(() => {
        if ( strangerCode != '') {
            sendPreOfferHandler();
            openDialogModal();
        }
    }, [callType]);

// Chat Handler
    const chatTypeHandler = () => {
        if ( strangerCode != '') {
            SetCallType('CHAT')
        }
        
    }

// Call Handler
    const callTypeHander = () => {
        if ( strangerCode != '') {
            SetCallType('CALL')
        }
    }




  return (
    <div className='dashboard_container'>
            <div className='logo_container'>
                <img src={logo}></img>
            </div>
            <div>
                <div className='description_container'>
                    <p className='description_container_paragraph'>
                        Talk with other user by passing his personal code or talk with strangers!
                    </p>
                </div>
                <div className='personal_code_container'>
                    <div className='personal_code_title_container'>
                        <p className='personal_code_title_paragraph'>
                            Your personal code
                        </p>
                    </div>
                    <div className="personal_code_value_container">
                        {/* <p className='personal_code_value_paragraph' id='personal_code_paragraph' ref={codePara} value={socketID}>{socketID}</p> */}
                    {/* Value to copy */}
                        <input type="text" className='personal_code_value_paragraph' id='personal_code_paragraph' onChange={e => setSocketIdGetter(e.target.value)} value={socketIdGetter} />

                    {/* Button for Copy */}
                    <CopyToClipboard text={ clipboardValue } onCopy={() => setCopied(true)}>
                        <button className='personal_code_copy_button' id='personal_code_copy_button' onClick={copyClickHandler}>
                            <img src={copyButton}></img>
                        </button>
                    </CopyToClipboard>

                    </div>
                </div>
                </div>

{/* This will handle sendPreOffer */}
{/* Text */}
                <div className='personal_code_connecting_container'>
                    <p className='personal_code_connecting_paragraph'>Personal Code</p>

                    <div className='personal_code_connecting_input_container'>
                    <input type="text" className='personal_code_input' id='personal_code_input' value={strangerCode} onChange={e => setStrangerCode(e.target.value)} />

                        
                    </div>
{/* Buttons */}
                    <div className='personal_code_connecting_buttons_container'>
                        <button className='connecting_button' id='personal_code_chat_button' onClick={chatTypeHandler}>
                            <img src={chatButton} className='connecting_buttons_image'></img>
                        </button>
                        <button className='connecting_button' id='personal_code_video_button' onClick={callTypeHander}>
                            <img src={videoButton} className='connecting_buttons_image'></img>
                        </button>
                    </div>
                </div>
                <div className='stranger_connecting_container'>
                    <p className='stranger_title_container'>Stranger</p>
                    <div className='stranger_buttons_container'>
                        <button className='connecting_button' id='stranger_chat_button'>
                            <img src={chatButton} className='connecting_buttons_image'></img>
                        </button>
                        <button className='connecting_button' id='stranger_video_button'>
                            <img src={videoButton} className='connecting_buttons_image'></img>
                        </button>
                    </div>
                </div>
                <div className='checkbox_container'>
                    <div className='checkbox_connection' id='allow_strangers_checkbox'>
                        <img id='allow_strangers_checkbox_image' className='' src={check}></img>
                    </div>
                    <p className='checkbox_container_paragraph'>Allow connection from strangers</p>
                </div>
                <div className='dashboard_blur display_none' id='dashboard_blur'></div>
        </div>
  )
}

export default Dashboard