
import React from 'react'
import { myContext } from '@/stateProvider/Provider'
import { useContext } from 'react';
export default function Grandchild({data}:any) {
 const state= useContext(myContext);
 console.log(state);

    return (
    <div>
      Grandchild: {data}
    </div>
  )
}
