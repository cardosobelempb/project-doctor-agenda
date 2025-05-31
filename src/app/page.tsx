"use client"
import { useSession } from "next-auth/react";

import { AuthButton } from "@/components/auth/auth-button";


export default function Home() {
  const { data: session, status } = useSession()
  console.log("Session => ", session)
  console.log("Status => ", status)

  // async function handleLogin() {
  //   await handleRegister("github")
  // }
  return (
    <div className='justify-center gap-x-0.5 flex '>
      <h1>Home</h1>
      <AuthButton />

    </div>
  );
}

