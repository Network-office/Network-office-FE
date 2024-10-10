import { NextAuthContext } from "@/app/provider"
import BottomNavBar from "@/_common/_components/BottomNavBar"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

import { QueryProvider } from "@/app/provider"
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <NextAuthContext>{children}</NextAuthContext>
        </QueryProvider>
        <Toaster />
        <BottomNavBar />
      </body>
      <Script
        id="naver"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVERMAP_API_CLIENT_ID}&submodules=geocoder`}
      />
    </html>
  )
}
