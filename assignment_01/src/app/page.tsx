import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <h1>Home</h1>
      <h3>To explore the routs click below</h3>

    <ul>
        <li> <Link href={"Basics_rout"}>Basics Rout</Link></li>
        <li> <Link href={"Dynamic_rout/City"}>Dynamic Rout</Link></li>
        <h3> Nested Rout</h3>
        <li> <Link href={"Nested_rout"}>Outer Rout</Link></li>
        <li> <Link href={"Nested_rout/inner_rout"}>Inner Rout</Link></li>

      </ul>
      
    </div>
  );
}
