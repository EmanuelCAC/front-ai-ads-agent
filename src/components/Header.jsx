'use client'

import { useAuthStore } from '@/stores/authStore.js'
import React from 'react'

const Header = () => {

  const { userName, isLogged, login, logout } = useAuthStore()

  return (
    <div>
      <header className="bg-[#1a202c] text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome to the Chatbot</h1>
        {isLogged ? (
          <div className="flex items-center gap-4">
            <p className="text-center">
              <span className="font-bold">User: </span>
              {userName}
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-auto"
              onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => login("Emanuel", "'http://https://github.com/EmanuelCAC.png'", "awsdawq12emqmw0ain392kac0q0")}>
            Login
          </button>
        )}
        
      </header>
    </div>
  )
}

export default Header