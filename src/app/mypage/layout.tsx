export default function MyPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  )
}
