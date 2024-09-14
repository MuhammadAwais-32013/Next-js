import React from 'react'

export default function layout({Children}:any) {
  return (
    <html>
      <body>
      <h2>Root</h2>
      {Children}
      </body>
    </html>
      
    
  )
}
