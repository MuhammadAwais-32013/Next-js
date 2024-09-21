
import React from 'react'
import Grandchild from './Grandchild'

export default function Child({data}:any) {
  return (
    <div>
      Child:
      <Grandchild data={data} />
    </div>
  )
}
