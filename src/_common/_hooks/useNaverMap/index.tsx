"use client"
import { useRef, useEffect, useCallback, useState } from "react"
import { MakersProps, NaverMapComponentProps } from "./types"
import { MeetingPositionTypes } from "@/app/meeting/types"
import getMapBoundInMarker from "./_utils/getMapBoundInMarker"
import getMapBoundOutMarker from "./_utils/getMapBoundOutMarker"
import NaverMapComponent from "./_components/NaverMapComponent"
import MarkerIcon from "./_components/MarkerIcon"
import ReactDOMServer from "react-dom/server"

const useNaverMap = (
  initial: { lat: number; lng: number },
  makers?: Array<MeetingPositionTypes>,
  makerOption?: {
    markerClickHandler: (makerDetail: any) => void
  }
) => {
  const [markerPins, setMarkerPins] = useState<naver.maps.Marker[]>([])
  const mapElement = useRef(null)
  const mapRef = useRef<naver.maps.Map | null>(null)

  useEffect(() => {
    if (!window.naver.maps.Service || !mapElement.current) return

    const mapOptions = {
      center: new naver.maps.LatLng(initial.lat, initial.lng),
      zoom: 15,
      zoomControl: false
    }

    mapRef.current = new naver.maps.Map(mapElement.current, mapOptions)
    if (makers) {
      setMeetingMarkers(makers)
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current) return

    const zoomListener = naver.maps.Event.addListener(
      mapRef.current,
      "zoom_changed",
      () => {
        updateMarkerShowing(markerPins)
      }
    )

    const dragListener = naver.maps.Event.addListener(
      mapRef.current,
      "dragend",
      () => {
        updateMarkerShowing(markerPins)
      }
    )

    return () => {
      naver.maps.Event.removeListener(zoomListener)
      naver.maps.Event.removeListener(dragListener)
    }
  }, [markerPins])

  const setMapPosition = (newLat: number, newLng: number) => {
    if (!mapRef.current || !naver) return
    mapRef.current.setCenter(new naver.maps.LatLng(newLat, newLng))
    mapRef.current.setZoom(15)
  }

  const setMeetingMarkers = (makers: MakersProps[]) => {
    const newMarkers = makers?.map((newMaker) => {
      const markerContent = ReactDOMServer.renderToString(
        <MarkerIcon categoryName={newMaker.category} />
      )

      const maker = new naver.maps.Marker({
        position: new naver.maps.LatLng(newMaker.lat, newMaker.lng),
        clickable: true,
        map: mapRef.current!,
        icon: {
          content: markerContent,
          size: new naver.maps.Size(30, 45),
          anchor: new naver.maps.Point(15, 45)
        }
      })

      return maker
    })
    setMarkerPins(newMarkers)
    updateMarkerShowing(newMarkers)
  }

  const updateMarkerShowing = (markerList: naver.maps.Marker[]) => {
    if (!mapRef.current) return
    getMapBoundInMarker(mapRef.current, markerList).forEach((element) => {
      element.setMap(mapRef.current)
    })
    getMapBoundOutMarker(mapRef.current, markerList).forEach((element) => {
      element.setMap(null)
    })
  }

  return {
    NaverMapComponent: useCallback(
      (props: NaverMapComponentProps) => (
        <NaverMapComponent
          {...props}
          ref={mapElement}
        />
      ),
      []
    ),
    setMeetingMarkers,
    setMapPosition
  }
}

export default useNaverMap
