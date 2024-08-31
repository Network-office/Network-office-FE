"use client"

import Script from "next/script"
import { useRef, useEffect } from "react"

interface NaverMapProps {
  lat?: number
  lng?: number
  width?: number
  height?: number
  Makers?: MakerTypes[]
}

interface MakerTypes {
  lat: number
  lng: number
}

const NaverMap = ({
  lat = 37.4877974,
  lng = 126.8255598,
  width = 800,
  height = 800,
  Makers = [
    { lat: 36.8595704, lng: 127.105399 },
    { lat: 36.895704, lng: 127.105399 },
    { lat: 36.8795704, lng: 127.105399 }
  ]
}: NaverMapProps) => {
  const mapElement = useRef(null)

  const initializeMap = () => {
    if (!mapElement.current || !naver) return

    const mapOptions = {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 15,
      zoomControl: true
    }

    const map = new naver.maps.Map(mapElement.current, mapOptions)

    addMarkers(map)
  }

  const searchMap = (searchKeyword: string) => {
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

  const addMarkers = (map: any) => {
    Makers?.forEach((newMaker) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(newMaker.lat, newMaker.lng),
        map: map
      })
    })
  }

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

  return (
    <>
      <div
        ref={mapElement}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <Script
        id="naver"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVERMAP_API_CLIENT_ID}&submodules=geocoder`}
      />
      <button>가나다라</button>
    </>
  )
}

export default NaverMap
