"use client";
import React from "react";

export default function errorhandle({ error, reset }: any) {
  return (
    <>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
