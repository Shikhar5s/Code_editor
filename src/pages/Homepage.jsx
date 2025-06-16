import React from 'react'
import {useState} from 'react'

import shortUUID from 'short-uuid';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom"

export const Homepage = () => {

  const[id,setId]=useState("")
  const[username,setUsername]=useState("")
const translator = shortUUID();


const navigate = useNavigate();
  const createNewRoom=(e)=>{
      e.preventDefault();


     const roomId = translator.new();

    console.log(roomId)
    setId(roomId)
  

  }

// join room 

  const Joinroom=(e)=>{
    if(!id || !username){
      toast.error("EVERYTHING SHOULD BE FILLED")

      return;
    }
    // redirect
    navigate(`/editor/${id}`,{
      state:{
        username,
      }
    })


  }
    return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-8">Welcome to Code Editor</h1>

        <div className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="room-id"
            value={id}
            onChange={(e)=>setId(e.target.value)}
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="USERNAME"
            onChange={(e)=>setUsername(e.target.value)}
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button onClick={Joinroom} className="py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-all font-semibold">
            Join Room
          </button>

          <p className="text-sm text-gray-300">
            Don’t have a room?{' '}
            <a  href="/"  onClick={createNewRoom}  className='text-blue-400 hover:underline cursor-pointer'>
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
    