'use client'
import { log } from 'console'
import React, { useEffect, useState } from 'react'
import PostCard from '@/components/PostCard/PostCard'
import Link from 'next/link'
export default function page() {
const [postData, setPostData]=useState([])

useEffect(()=>{
 gettAllPost()
},[])

  async function gettAllPost() {
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data=await response.json() 
    setPostData(data)

  }

  interface Post
  {
     id:Number,
     title:string,
     body:string
  }
  return (
    <div className='flex flex-wrap'>
           {postData.map((eachPost:Post)=>{
           return(
         <Link href={`/Blog/${eachPost.id}`}> <PostCard postData={eachPost} /></Link> )
           })}
    </div>
  );
}
