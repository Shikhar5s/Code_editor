import React, { useEffect, useState,useRef } from 'react';
import Client from '../Components/Client';
import Editor from '../Components/ediotr';
import ACTIONS from '../../Action';
import {useLocation,useParams,useNavigate} from 'react-router-dom'
import {initSocket} from '../socket.js'

export const Editorpage = () => {
  const socketRef=useRef(null);
  const location=useLocation(null);
  const navigate=useNavigate();
const {roomId}=useParams()

 
  useEffect(()=>{
   
    const init=async()=>{

      socketRef.current=await initSocket();// if useRef is used
      socketRef.current.on('connect_error', (err)=>handleErrors(err))

      
     function handleErrors(e){
      console.log('socket error',e);
     }
socketRef.current.emit(ACTIONS.JOIN,{
       roomId,
        username:location.state?.username,// getting what you send from navigation
     })
    }
init();


  },[])

  const [clients, setClients] = useState([
    { socketId: 1, username: 'Shikhar S' },
    { socketId: 2, username: 'Mohit S' },
    { socketId: 3, username: 'Raj' },
    { socketId: 4, username: 'Aman' },
    // Add more clients to test wrap
  ]);

  return (
    <div className="flex h-screen">
      {/* Left Sidebar (20%) */}
      <div className="w-[20%] bg-blue-950 text-white flex flex-col justify-between p-4">
        <div>
          {/* Top Header */}
          <h2 className="text-3xl font-mono font-bold text-green-400 bg-black px-4 py-2 rounded-md shadow-lg border border-green-600 select-none">
  Styles
</h2>

          {/* Connected Users */}
          <h3 className="text-md font-semibold mb-2">Connected</h3>
          <div className="grid grid-cols-2 gap-2">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Copy Room Id
          </button>
          <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-100">
            Leave
          </button>
        </div>
      </div>

      {/* Right Editor Section (rest, 70-80%) */}
      <div className="w-[80%] bg-black text-white">
        <Editor />
      </div>
    </div>
  );
};
