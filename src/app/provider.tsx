"use client"

import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { SessionProvider } from "next-auth/react"

const queryClient = new QueryClient()

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  )
}

export const NextAuthContext = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}
