import React from 'react'

export default function layout({children}:any) {
  return (
    <html>
      <body>
        <h1>Root</h1>
        {children}
      </body>
    </html>
  )
}
