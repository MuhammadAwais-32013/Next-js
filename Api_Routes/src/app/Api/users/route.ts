import { NextRequest, NextResponse } from "next/server"
import { json } from "stream/consumers"

let users=[
    {   
        id:1,
        name:'Awais',
        email:'abx@gmail.com',
        age:20
    },
    {   
        id:2,
        name:'Qarni',
        email:'abc@gmail.com',
        age:22
    }
]

export function GET(){
return NextResponse.json(users)
}

export async function POST(request:NextRequest) {
    const data= await request.json()
    users.push(data)
    return NextResponse.json({message:`Newuser ${data.name} Sucessfully Posted`})
}

export async function DELETE(request:NextRequest) {
 const {id}= await request.json();

 const initialLength= users.length

 users=users.filter((user)=> user.id!==id)

 if (users.length < initialLength) {
    return NextResponse.json({ message: `User with id ${id} deleted successfully` });
} else {
    return NextResponse.json({ message: `User with id ${id} not found` }, { status: 404 });
}
}