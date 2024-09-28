'use client'
import React, { useEffect, useState } from 'react'
import Comment from '@/components/Comment/Comment'
interface Post{
    id:number,
    title:string,
    body:string
}

interface Comment{
    PostID:number,
    Id:number,
    email:string,
    name:string,
    body:string
}
export default function page({params}:any) {
const [postData,setPostData]=useState<Post | null>(null)
const [comments, setComments]=useState ([])

useEffect(()=>{
    specificPostwithComments()
},[])

const specificPostwithComments= async ()=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.BlogID}`)
    if (response.ok) {
        const postdata= await response.json()

        const postComment= await  fetch(`https://jsonplaceholder.typicode.com/posts/${params.BlogID}/comments`)
        const coments=await postComment.json()
        setComments(coments)
        setPostData(postdata)
    }
  
}


  return (
<div>
<div className="max-w-full m-3 mb-3 bg-white rounded-lg shadow-md  border border-blue-400">
    <div className="p-2 m-5">
      <h2 className="text-xl font-bold mb-2">{(postData || {}).title}</h2>
      <p className="text-gray-700">{(postData || {}).body}</p>
    </div>
  </div>
<div >
   {comments.map((eachComment:Comment)=>{
    return (
        <Comment Comments={eachComment} />
    )
   })}
</div>
  </div> 
  )
}
