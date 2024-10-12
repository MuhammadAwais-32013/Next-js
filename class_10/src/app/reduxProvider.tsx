"use client"
import { Provider } from 'react-redux'
import store from "@/Store/store"
export default function ReduxProvider({children}:any) {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  )
}
