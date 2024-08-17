import React from 'react'
import './globals.css'
export default function layout({children}:any) {
  return (
    <html>
      <body>
        <h2>Root</h2>
        {children}
      </body>
    </html>
      
  )
}
