import Link from 'next/link'
import React from 'react'

export default function layout(props: any) {
  return (
    <html>
      <body>
       <h1>Main layout of Project</h1>
       {props.children}
      </body>
    </html>
  )
}
