import type { Metadata } from "next"
import "./globals.css"

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
      <body className="flex flex-col min-h-screen bg-gray-100">
        <div className="container max-w-[350px]  mx-auto px-4 py-6">
          {children}
        </div>
      </body>
    </html>
  )
}
