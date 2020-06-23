import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'


function Chat() {

  const [message, setMessage] = useState('')

  useEffect(() => {

    const socket = io(); 

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  return (
    <div>
      <ul id="messages">
        
      </ul>

      <form onSubmit={((e) => (handleSubmit))}>
        <input 
          value={message}
          onChange={((e) => setMessage(e.target.value))}
          id="m" 
          autoComplete="off" 
        
        />
        
        <button>Send</button>
      </form>
    </div>
  )

}

export default Chat