import React, { useState, useEffect } from 'react'
import SocketIoClient from 'socket.io-client'


function Chat() {

  useEffect(() => {

    const socket = SocketIoClient("/"); 


  }, [])

  return (
    <div>
      <ul id="messages">
        
      </ul>

      <form action="">
        <input id="m" autocomplete="off" /><button>Send</button>
      </form>
    </div>
  )

}

export default Chat