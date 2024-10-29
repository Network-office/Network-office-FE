const getMapBoundInMarker = (
  naverMap: naver.maps.Map,
  markers: naver.maps.Marker[]
) => {
  const mapBound = naverMap?.getBounds()
  const boundInMarker = markers.filter((item) =>
    mapBound?.hasPoint(item.getPosition())
  )
  return boundInMarker
}

export default getMapBoundInMarker
