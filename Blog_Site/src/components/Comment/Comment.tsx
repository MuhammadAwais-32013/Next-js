import React from 'react'

export default function Comment({Comments}:any) {
    
  return (
    <div className="w-[90vw] mx-auto my-4 p-6 mb-3 bg-white rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0">
        <span className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          {Comments.name.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="ml-4">
        <p className="text-lg font-semibold text-gray-900">{Comments.name}</p>
        <p className="text-sm text-gray-500">{Comments.email}</p>
      </div>
    </div>
  
    <p className="text-gray-700 mb-4">{Comments.body}</p>
  
    <div className="text-xs text-gray-500">
      <span className="font-semibold">Comment ID:</span> {Comments.id} • 
      <span className="font-semibold"> Post ID:</span> {Comments.postId}
    </div>
  </div>
  
  )
}
