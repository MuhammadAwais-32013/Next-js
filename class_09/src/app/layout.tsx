import React from 'react'
import './globals.css'
import ContextProvider from '@/stateProvider/Provider'
export default function layout({children}:any) {
  return (
   <html>
    <body>
      Root
      <ContextProvider>
        {children}
        </ContextProvider>
     
    </body>
   </html>
  )
}
