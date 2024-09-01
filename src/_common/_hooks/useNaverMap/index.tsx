"use client"

import { useRef, useEffect, useCallback } from "react"
import { NaverMapComponentProps, MakersProps } from "./types"

const useNaverMap = (
  lat: number,
  lng: number,
  makers: Array<{ lat: number; lng: number }> = []
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
      center: new naver.maps.LatLng(lat, lng),
      zoom: 15,
      zoomControl: true
    }

    mapRef.current = new naver.maps.Map(mapElement.current, mapOptions)
    setMarkers(makers)
  }

  const setMapPosition = (newLat: number, newLng: number) => {
    if (!mapRef.current || !naver) return

    mapRef.current.setCenter(new naver.maps.LatLng(newLat, newLng))
  }

  const searchMapInform = (searchKeyword: string) => {
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
      new naver.maps.Marker({
        position: new naver.maps.LatLng(newMaker.lat, newMaker.lng),
        map: mapRef.current!
      })
    })
  }

  const NaverMapComponent = useCallback(
    ({ width = 800, height = 800 }: NaverMapComponentProps) => {
      return (
        <div
          ref={mapElement}
          style={{ width: `${width}px`, height: `${height}px` }}
        />
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
