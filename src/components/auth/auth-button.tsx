"use client"

import { signIn } from "next-auth/react"

import { Button } from "../ui/button"

export function AuthButton() {
  const handleRegister = async () => {
    await signIn("github", { callbackUrl: "/dashboard" })
  }

  return <Button onClick={handleRegister}>Entrar com GitHub</Button>
}
