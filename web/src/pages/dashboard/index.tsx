import React, { useState, useEffect } from 'react';

import HeroBanner from "../../components/heroBanner";
import About from "../../components/about";
import FAQ from "../../components/faq";
import Contact from "../../components/contact";
import Recipes from "../../components/recipes";
import Seasonal from "../../components/seasonal";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faTimes } from "@fortawesome/free-solid-svg-icons";


import io from 'socket.io-client';

const socket = io('http://localhost:1234'); 

export function Dashboard() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]); // Specify the type as an array of strings
  const [isChatOpen, setIsChatOpen] = useState(false);


  useEffect(() => {
    // Listen for messages from the server
    socket.on('connect', ()=>console.log(socket.id))

 
    socket.on('chat message', (message: string) => {
      console.log("->", message);
      
      setMessages((prevMessages) => [...prevMessages, message]); // Use the functional form of setState to update the state correctly
    });

    return () => {
      // Cleanup when the component unmounts
      socket.off('chat message');
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    // Emit a message to the server
    socket.emit('chat message', message);
    setMessage("");
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
    
    return (
        <div>
<div className="fixed bottom-20 right-5 z-50">
      {isChatOpen ? (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className='flex justify-between'>
            <div className=' text-m font-bold text-slate-500'>Chat with us!</div>
            <div>
            <FontAwesomeIcon onClick={toggleChat} icon={faTimes} className='font-extrabold text-white cursor-pointer bg-slate-400 p-1 rounded' />
            </div>
          </div>
          <ul className="list-none p-0">
            {messages.map((message, index) => (
              <li key={index} className="mb-2 p-2 text-white rounded" style={{backgroundColor:"rgba(147,189,203,255)"}}>
                {message}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="mt-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="mt-2 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
              style={{backgroundColor:"rgba(147,189,203,255)"}}
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className=" text-white rounded-lg p-5 transition duration-300"
          style={{backgroundColor:"rgba(147,189,203,255)"}}
        >
          <FontAwesomeIcon icon={faComment} className="text-white" />
        </button>
      )}
    </div>
            <HeroBanner/>
        <About/>
        <Recipes/>
        <Seasonal/>
        <FAQ/>
        <Contact/>
        </div>
    );
}
