import Image from "next/image";
import {Button} from'@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-slate-400">
    {/* // <div className="min-h-56 bg-slate-400 flex justify-center items-center flex-wrap"> */}
      {/* <div className="bg-red-500 mx-5 p-5">child 1</div>
      <div className="bg-blue-300 p-5">child 2</div>
       */}

  <Card>
       <CardHeader>
        <CardTitle>Register Now</CardTitle> 
        </CardHeader>
        <CardContent>
          <label>Enter Name</label>
          <Input type="text"></Input>
          <label>Enter Password</label>
          <Input type="password"></Input>
        </CardContent>
        <CardFooter> 
          <Button>signup</Button>
          <Button>login</Button>
        </CardFooter>
{/* <Button >Click</Button> */}
</Card>
    {/* // </div> */}
    </div>
  )};

  