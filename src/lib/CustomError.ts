export default class CustomError extends Error {
  response?: {
    data: any
    status: number
    headers: string
  }

  constructor(message: string, status: number) {
    super(message)
    this.response = {
      data: null,
      status,
      headers: ""
    }
  }
}
