'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
 const [users, setUsers]=useState([])
 const [usersName, setuserName]=useState("")
 const [userId, setUserID]=useState(null)
 const [usersEmail, setEmail]=useState("")
 const [userAge, setAge]=useState("")
 
 

useEffect(()=>{
  getUsers()
},[])
const getUsers=async()=>{
  const users=await fetch(`http://localhost:3000/Api/users/`)
  const userData=await users.json()
  setUsers(userData)
}

function setName(e:any) {
  setuserName(e.target.value)
}

function setage(e:any) {
  setEmail(e.target.value)
}

function setemail(e:any) {
  setAge(e.target.value)
}

function setID(e:any) {
  setUserID(e.target.value)
}

const PostData=async()=>{

  const newUser=
  {
    id:userId,
    name:usersName,
    age:userAge,
    email:usersEmail
  }
const requestBacked= await fetch(`http://localhost:3000/Api/users/`, {
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },

  body: JSON.stringify(newUser)
});

if(requestBacked.ok){
  getUsers()
}
}


const DeletePost=async(id:any)=>{
  const userData=
  {
    id:id
  }
  const backenRequest= await fetch(`http://localhost:3000/Api/users/`,
    {
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(userData)
    }
  )

  if (backenRequest.ok) {
    getUsers()
  }
}

  return (
<div>
<div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-700 mb-6">Submit User Data</h2>

  <form>
  <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
        Id
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
        onChange={setID}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
        onChange={setName}
      />
    </div>

    {/* Email Input */}
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
        onChange={setemail}
      />
    </div>

    {/* Age Input */}
    <div className="mb-4">
      <label htmlFor="age" className="block text-sm font-medium text-gray-600 mb-2">
        Age
      </label>
      <input
        type="number"
        id="age"
        name="age"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your age"
        onChange={setage}
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-evenly ">
      <button
        type="submit"
        onClick={PostData}
        className="bg-blue-500 text-white  px-6 py-2  rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
        
      </button>
    </div>
  </form>
</div>



    <div className="overflow-x-auto mx-8 mt-10 mb-9">
  <table className="min-w-[90vw] bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg shadow-lg">
    <thead>
    <tr className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
        <th className="px-6 py-3 border-b bg-opacity-70 text-left text-sm font-semibold tracking-wider uppercase">
          ID
        </th> 
        <th className="px-6 py-3 border-b bg-opacity-70 text-left text-sm font-semibold tracking-wider uppercase">
          Name
        </th>
        <th className="px-6 py-3 border-b bg-opacity-70 text-left text-sm font-semibold tracking-wider uppercase">
          Email
        </th>
        <th className="px-6 py-3 border-b bg-opacity-70 text-left text-sm font-semibold tracking-wider uppercase">
          Age
        </th>
        <th className="px-6 py-3 border-b bg-opacity-70 text-left text-sm font-semibold tracking-wider uppercase">
        </th>
      </tr>
    </thead>
    <tbody>

      {users.map((eachUser:any)=>{
      return (
      <tr className="bg-white hover:bg-gray-100 transition duration-300 ease-in-out shadow-sm hover:shadow-md">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b">
         {eachUser.id}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b">
         {eachUser.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b">
          {eachUser.email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b">
          {eachUser.age}
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 border-b ">
          <button 
            onClick={() => DeletePost(eachUser.id)} // Pass the user's id to the delete function
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
          </td>
      </tr>

    )})}
    </tbody>
  </table>
</div>

  
</div>
  )
}
