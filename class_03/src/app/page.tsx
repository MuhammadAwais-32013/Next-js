// "use client"

import React from "react";
// import Button from '../../'
// import Button  from '../components/Button'
import Button from "@/components/Button";

 import { Nav } from "@/components/Nav";
import Link from "next/link";
export default function page() {
  const a = "abc";
  console.log(a);
  return (
    <div>
      <h1>hello</h1>
      <h3>Server Side and Client Side</h3>
      <Link href={"Nav"}>Go Nav</Link>
      <li><Link href={"./errorhandle"}>Loading</Link></li>
      <Nav/>
      <Button />
    </div>
  );
}
