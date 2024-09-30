"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import CustomError from "@/lib/CustomError"
import BaseErrorContent from "./BaseErrorContent"

interface Props {
  children?: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: CustomError
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: CustomError): State {
    return {
      hasError: true,
      error
    }
  }

  public componentDidCatch(error: CustomError, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      const status = this.state.error?.response?.status
      if (status) {
        return <BaseErrorContent status={status} />
      }
    }
    return this.props.children
  }
}

export default ErrorBoundary
