export interface getUserGeolocationResponseType {
  ok: boolean
  position?: { lat: number; lng: number }
  errorMessage?: string
}

export interface LocationResponseType {
  coords: { latitude: number; longitude: number }
}
