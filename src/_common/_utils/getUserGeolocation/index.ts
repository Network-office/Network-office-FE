import { getUserGeolocationResponseType, LocationResponseType } from "./types"

const getUserGeolocation = async () => {
  return new Promise<getUserGeolocationResponseType>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }: LocationResponseType) => {
        const result = {
          ok: true,
          position: { lat: coords.latitude, lng: coords.longitude }
        }
        resolve(result)
      },
      (error) => {
        const result = {
          ok: false,
          errorMessage: error.message
        }
        reject(result)
      }
    )
  })
}

export default getUserGeolocation
