import { NextRequest,NextResponse} from "next/server";
const user =[ {id:1, name:"Awais"},{id:2, name:"Qarni"},{id:3, name:"Awan"}, {id:4, name:"ibtisham"}
] 
export function GET(request:NextRequest,response:NextResponse){
 // Data base data
   
// return NextResponse.json({message:"Hello Api"})
 return NextResponse.json({user});
}

export async function POST(request:Request)
{
    const data = await request.json();
    user.push(data);
    return NextResponse.json({message:`hello,${data.name}`})
}

export async function DELETE(request:Request){
  const del=await request.json()
  return NextResponse.json({message: `${del.name} is deleted `})
}