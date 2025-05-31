"use client"

import { useSession } from "next-auth/react"

export default function DashboardPage() {
  const { data: session, status } = useSession()
    console.log("Session => ", session)
    console.log("Status => ", status)
  return (
    <div>DashboardPage</div>
  )
}
