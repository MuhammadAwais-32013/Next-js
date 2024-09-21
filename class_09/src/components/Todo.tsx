import React from 'react'

export default function Todo({todo, removeTodo}) {
  return (
    <div>
      <div 
        className='flex m-5 p-4 bg-gray-100 rounded-lg items-center justify-between'>
        <p className='text-lg font-medium'>{todo}</p> 
        <button 
          onClick={() => removeTodo(todo)} 
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded'>
          Delete
        </button>
      </div>
    </div>
  )
}
