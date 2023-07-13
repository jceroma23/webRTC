import React from 'react'


import logo from "../utils/images/logo.png";
import mic from "../utils/images/mic.png";
import camera from "../utils/images/camera.png";
import switchCameraScreenSharing from "../utils/images/switchCameraScreenSharing.png";
import recordingStart from "../utils/images/recordingStart.png";
import pause from "../utils/images/pause.png";
import resume1 from "../utils/images/resume.png";
import hangUp from "../utils/images/hangUp.png";



const VideoContainer = () => {
  return (
    <div className='call_container'>
            <div className='videos_container'>
                <div id='video_placeholder' className='videos_placeholder'>
                    <img src={logo} />
                </div>
                <video className='remote_video display_none' id='remote_video' autoPlay muted />
                <div className='local_video_container'>
                    <video className='local_video' id='local_video' muted autoPlay />
                </div>
                <div className='call_buttons_container display_none' id='call_buttons'>
                    <button className='call_button_small' id='mic_button'>
                        <img src={mic} id='mic_button_image'></img>
                    </button>
                    <button className='call_button_small' id='camera_button'>
                        <img src={camera} id='camera_button_image'></img>
                    </button>
                    <button className='call_button_large' id='hang_up_button'>
                        <img src={hangUp}></img>
                    </button>
                    <button className='call_button_small' id='screen_sharing_button'>
                        <img src={switchCameraScreenSharing}></img>
                    </button>
                    <button className='call_button_small' id='start_recording_button'>
                        <img src={recordingStart}></img>
                    </button>
                </div>
                <div className='finish_chat_button_container display_none' id='finish_chat_button_container'>
                    <button className='call_button_large' id='finish_chat_call_button'>
                        <img src={hangUp}></img>
                    </button>
                </div>
                <div className='video_recording_buttons_container display_none' id='video_recording_buttons'>
                    <button id='pause_recording_button'>
                        <img src={pause}></img>
                    </button>
                    <button id='resume_recording_button' className='display_none'>
                        <img src={resume1}></img>
                    </button>
                    <button id='stop_recording_button'>
                        Stop recording
                    </button>
                </div>
            </div>
    </div>
  )
}

export default VideoContainer