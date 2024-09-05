"use client"
import { useRef, useEffect, useCallback } from "react"
import { NaverMapComponentProps, MakersProps } from "./types"

const useNaverMap = (
  initial: { lat: number; lng: number },
  makers: Array<{ lat: number; lng: number }> = [],
  makerOption: {
    markerClickHandler: (makerDetail: any) => void
  }
) => {
  const mapElement = useRef(null)
  const mapRef = useRef<naver.maps.Map | null>(null)

  useEffect(() => {
    const checkNaverMapService = () => {
      if (window.naver && window.naver.maps && window.naver.maps.Service) {
        initializeMap()
      } else {
        setTimeout(checkNaverMapService, 100)
      }
    }
    checkNaverMapService()
  }, [])

  const initializeMap = () => {
    if (!mapElement.current || !naver) return

    const mapOptions = {
      center: new naver.maps.LatLng(initial.lat, initial.lng),
      zoom: 15,
      zoomControl: false
    }

    mapRef.current = new naver.maps.Map(mapElement.current, mapOptions)
    setMarkers(makers)
  }

  const setMapPosition = (newLat: number, newLng: number) => {
    if (!mapRef.current || !naver) return

    mapRef.current.setCenter(new naver.maps.LatLng(newLat, newLng))
  }

  const searchMapInform = (searchKeyword: string) => {
    if (!mapRef.current || !naver) return
    return naver.maps.Service.geocode(
      {
        query: searchKeyword
      },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          return alert("Something Wrong!")
        }
        return response.v2.addresses
      }
    )
  }

  const setMarkers = (makers: MakersProps[]) => {
    if (!mapRef.current) return

    makers?.forEach((newMaker) => {
      const maker = new naver.maps.Marker({
        position: new naver.maps.LatLng(newMaker.lat, newMaker.lng),
        clickable: true,
        map: mapRef.current!
      })
      maker.addListener("click", () => {
        makerOption.markerClickHandler(newMaker)
      })
    })
  }

  const NaverMapComponent = useCallback(
    ({ className, width = 500, height = 1000 }: NaverMapComponentProps) => {
      return (
        <div
          className={className}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: `${width}px`,
            maxHeight: `${height}px`
          }}>
          <div
            ref={mapElement}
            style={{ width: `100%`, height: `100%` }}
          />
        </div>
      )
    },
    []
  )

  return {
    NaverMapComponent,
    searchMapInform,
    setMarkers,
    setMapPosition
  }
}

export default useNaverMap
