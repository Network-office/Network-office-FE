const getMapBoundOutMarker = (
  naverMap: naver.maps.Map,
  markers: naver.maps.Marker[]
) => {
  const mapBound = naverMap?.getBounds()
  const boundOutMarker = markers.filter(
    (item) => !mapBound?.hasPoint(item.getPosition())
  )
  return boundOutMarker
}

export default getMapBoundOutMarker
