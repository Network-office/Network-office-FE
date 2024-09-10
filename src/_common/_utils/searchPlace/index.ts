import PlaceTypes from "./type"

const searchPlace = async (searchKeyword: string): Promise<PlaceTypes[]> => {
  if (!naver.maps.Service.geocode) throw new Error("not install geoCode")
  return new Promise((resolve, reject) => {
    naver.maps.Service.geocode(
      {
        query: searchKeyword
      },
      (status, response) => {
        if (status === naver.maps.Service.Status.ERROR) {
          reject(new Error("not authority"))
        }
        resolve(response.v2.addresses)
      }
    )
  })
}

export default searchPlace
