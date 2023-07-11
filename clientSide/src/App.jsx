import { io } from "socket.io-client";



function App() {
  const host = "http://localhost:3000/"
  const socket =  io(host, {
      withCredentials: true,
      extraHeaders: {
    "my-custom-header": "abcd"}
      });
  


  return (
   <div>
    Hello World 
   </div>
  )
}

export default App
