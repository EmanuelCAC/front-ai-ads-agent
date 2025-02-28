'use client'

import { useState } from "react";

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


  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex flex-col w-[50%] gap-4">
        {chat.map((item, i) => (
          <div key={i} className={`py-2 px-4 rounded-4xl w-fit ${item.id==1 ? "ml-auto bg-slate-700": "bg-zinc-700"}`}>
            {item.message}
          </div>
        ))}
      </div>

      <div className="flex fixed bottom-10 bg-slate-900 w-[50%] items-center p-3 rounded-full gap-3">
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="bg-slate-800 rounded-full p-2 w-full resize-none"></textarea>
        <button className="rounded-full bg-slate-800 aspect-square p-2" onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}
