"use client"

import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { SessionProvider } from "next-auth/react"

import { getQueryClient } from "@/_common/_utils/getClientQuery"

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  )
}

export const NextAuthContext = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}
