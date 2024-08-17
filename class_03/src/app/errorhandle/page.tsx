"use client";
import React from "react";

export default async function errorhandle() {
  const isError = true;
  // throw new Error("I crashed")
  const names = "abc";
  //   if (isError) {
  //     return <> page {names}

  //      </>;
  //   }
  await delay();
  return <>page</>;
}
const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
};
