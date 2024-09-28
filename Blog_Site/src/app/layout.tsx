import React from 'react'
import './globals.css'
import Navbar from "@/components/TopNav/NavBar";
export default function layout({children}:any) {
  return (
    <html>
      <body>
      <Navbar />
        {children}
      </body>
    </html>
  )
}
