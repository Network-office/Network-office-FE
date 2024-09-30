"use client"

import ErrorBoundary from "@/_common/_components/ErrorBoundary"
import Temp from "@/_common/_components/temp"
export default function Home() {
  return (
    <div>
      <ErrorBoundary>
        <Temp />
        <p>안녕</p>
      </ErrorBoundary>
    </div>
  )
}
