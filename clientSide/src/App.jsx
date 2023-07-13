import React, { useEffect, useState } from "react";

import { io } from "socket.io-client";
// COMPONENTS
import Dashboard from "./components/dashboard";
import ChatContainer from "./components/chatContainer";
import VideoContainer from "./components/videoContainer";
import ModalCall from "./components/modalCall";
import ModalCaller from "./components/ModalCaller";

const host = "http://localhost:3000/"
const socket =  io.connect(host); 


function App() {
  // State Needed
  const [ socketID, setSocketID ] = useState(null)
  const [ localStream, setLocalStream ] = useState(null)
  const [ remoteStream, setRemoteStream ] = useState(null)
  const [ screenSharingActive, setScreenSharingActive ] = useState(false)
  const [ screenSharingStream, setScreenSharingStream ] = useState(null)
  const [ allowConnectionsFromStranger, setallowConnectionFromStranger ] = useState(false)
  const [ callState, setCallState ] = useState(null)

  // Socket Connections
  socket.on("connect", () => {
        console.log("Connected to Socket from wss " + socket.id);
        setSocketID(socket.id)
      });

  // Recieving Caller ID
      //Connected User
      const [ strangerCode, setStrangerCode ] = useState('');
      const [ callTypes, setCallType ] = useState('');

  socket.on('pre-offer', (dataCallType) => {
    const { callerSocketId, callType } = dataCallType;
    setCallType(callType);
    setStrangerCode(callerSocketId)
  }) 

  // Handle Modal Callers
    const [ callDialogModal, setCallDialogModal ] = useState(false)
    const [ calleeDialogModal, setCalleeDiagogModal ] = useState(false)
  //Callerr
    const closeDialogModal = () => {
      setCallDialogModal(false)
    } 
    const openDialogModal = () => {
      setCallDialogModal(true)
    }
    //Reciever
    const closeDialogModalCallee = () => {
      setCalleeDiagogModal(false)
    } 
    const openDialogModalCallee = () => {
      setCalleeDiagogModal(true)
    }

//Function to open Modal for reciever
  useEffect(() => {
    if (strangerCode != '' && callTypes != '') {
      openDialogModalCallee()
    }

  }, [strangerCode], [callTypes])





  return (
   <div className="main_container">
    
    <Dashboard socketID={socketID} socket={socket} openDialogModal={openDialogModal} />
    <VideoContainer />
    <ChatContainer />
    {callDialogModal && <ModalCall closeDialogModal={closeDialogModal} />}
    {calleeDialogModal && <ModalCaller closeDialogModalCallee={closeDialogModalCallee} strangerCode={strangerCode} callTypes={callTypes} />}
   </div>
  )
}

export default App
