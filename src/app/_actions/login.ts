"use server"

import { signIn } from '@/shared/auth/auth'

export async function handleRegister(provider: string) {
  await signIn(provider, {redirectTo: "dashboard"})
}