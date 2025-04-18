'use client'

import { useAuthStore } from '@/stores/authStore.js'

const Footer = () => {

  const { userName } = useAuthStore()

  return (
    <footer className="bg-[#1a202c] text-white p-4">
      <p className="text-center">
        <span className="font-bold">User: </span>
        {userName}
      </p>
      {/* <p className="text-center">© 2023 Chatbot. All rights reserved.</p> */}
    </footer>
  )
}

export default Footer