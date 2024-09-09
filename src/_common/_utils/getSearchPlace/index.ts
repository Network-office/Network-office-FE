const searchMapInform = (searchKeyword: string) => {
  if (!naver.maps.Service.geocode) throw new Error("not install geoCode")
  return naver.maps.Service.geocode(
    {
      query: searchKeyword
    },
    function (status, response) {
      if (status === naver.maps.Service.Status.ERROR) {
        throw new Error("not authority")
      }
      return response.v2.addresses
    }
  )
}
