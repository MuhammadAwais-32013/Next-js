import Image from "next/image";

export default async function Home() {
//  const response= await fetch("https://jsonplaceholder.typicode.com/todos")
// const response= await fetch(`http://localhost:3000/API/users`)
//  const data= await response.json()
//  console.log(data);
 

 const resp= await fetch(`http://localhost:3000/API/users`,{
  method:"POST",
  headers:{
    'Content-Type':"application/json"
  },
  body:JSON.stringify(
  { 
    id:"100",
    name:"abc",
  }),
 });
 const data= resp.json()
 console.log(data);
 
  return (
  <h2>Page</h2>
  );
}
