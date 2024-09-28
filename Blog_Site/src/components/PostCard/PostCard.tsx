import React from 'react'

export default function PostCard({postData}:any) {
   
  return (
    <div>
    <div className="flex">
  
     
        <div className="bg-white mb-2 max-w-sm rounded-lg shadow-md border border-blue-400  m-4">
            <div className='px-3 py-3'>
          <h2 className="text-xl font-bold mb-2">{postData.title}</h2>
          <p className="text-gray-700">{postData.body}</p>
          </div>
        </div>
   
  
  </div>
  </div>
  
  
  )
}
