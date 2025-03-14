'use client'

import { useEffect, useState } from "react";
import { LuBot } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
  
  const [chat, setChat] = useState([])
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    const response = await fetch("http://localhost:3000/ai", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({question: message})
    })

    const data = await response.json()
    setChat([...chat,{message: message, id:1}, {message: data.response, id:2}])
    setMessage("")
  }

  useEffect(() => {
    const getMessage = async () => {
      const response = await fetch("http://localhost:3000/welcome")
      const data = await response.json()
      setChat(data.response)
    }

    getMessage()
  }, [])


  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex flex-col w-[50%] gap-4">
        {chat.map((item, i) => (
          <div className={`flex ${item.id==1 ? "flex-row-reverse": "flex-row"} gap-2 relative`}>
            {item.id==2 ? (
              <div className="rounded-full bg-zinc-700 aspect-square w-[46px] h-[46px] p-2 absolute -left-13 -bottom-5">
                <LuBot size={30}/>
              </div>
            ): (
              <div className="rounded-full bg-slate-700 aspect-square w-[46px] h-[46px] p-3 absolute -right-13 -bottom-5">
                <FaRegUser size={21}/>
              </div>
            )}
            <div key={i} className={`py-2 px-4 rounded-2xl max-w-[85%] w-fit ${item.id==1 ? "ml-auto bg-slate-700 rounded-br-none": "bg-zinc-700 rounded-bl-none"}`}>
              {item.message}
            </div>
          </div>
        ))}
      </div>

      <div className="flex fixed bottom-10 bg-slate-900 w-[50%] items-center p-3 rounded-2xl gap-3">
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="bg-slate-800 rounded-xl p-2 w-full resize-none focus-visible:outline-none"></textarea>
        <button className="rounded-xl bg-slate-800 aspect-square p-2 cursor-pointer hover:bg-slate-700 active:bg-slate-600" onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}
