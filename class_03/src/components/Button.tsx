"use client"
export default function Button() {
  return (
   <>
        <button onClick={function abc(){
        console.log("Button Clicked through Server side");
        
      }}>click me</button>
   </>
  )
}
