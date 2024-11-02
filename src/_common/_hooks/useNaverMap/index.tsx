"use client"
import { useRef, useEffect, useCallback, useState } from "react"
import { MakersProps, NaverMapComponentProps } from "./types"
import { MeetingPositionTypes } from "@/app/meeting/types"
import getMapBoundInMarker from "./_utils/getMapBoundInMarker"
import getMapBoundOutMarker from "./_utils/getMapBoundOutMarker"
import NaverMapComponent from "./_components/NaverMapComponent"
import MarkerIcon from "./_components/MarkerIcon"
import ClusterIcon from "./_components/ClusterIcon"
import ReactDOMServer from "react-dom/server"
import { Cluster } from "./types"

const useNaverMap = (
  initial: { lat: number; lng: number },
  makers?: Array<MeetingPositionTypes>,
  makerOption?: {
    markerClickHandler: (makerDetail: any) => void
  }
) => {
  const [markerPins, setMarkerPins] = useState<naver.maps.Marker[]>([])
  const [existCluster, setExistCluster] = useState<naver.maps.Marker[]>([])
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

    const handleMapChange = () => {
      existCluster.forEach((cluster) => cluster.setMap(null))
      setExistCluster([])
      updateMarkerShowing(markerPins)
    }

    const zoomListener = naver.maps.Event.addListener(
      mapRef.current,
      "zoom_changed",
      handleMapChange
    )

    const dragListener = naver.maps.Event.addListener(
      mapRef.current,
      "dragend",
      handleMapChange
    )

    return () => {
      naver.maps.Event.removeListener(zoomListener)
      naver.maps.Event.removeListener(dragListener)
    }
  }, [markerPins, existCluster])

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

    existCluster.forEach((cluster) => {
      cluster.setMap(null)
    })
    setExistCluster([])

    const outBoundMarker = getMapBoundOutMarker(mapRef.current, markerList)
    outBoundMarker.forEach((marker) => {
      marker.setMap(null)
    })

    const inBoundMarker = getMapBoundInMarker(mapRef.current, markerList)
    const groupingGridTable = setGroupingGrid(inBoundMarker)
    const clusteringTable = setClusteringGrid(groupingGridTable)

    if (clusteringTable) {
      const newClusters: naver.maps.Marker[] = []

      clusteringTable.forEach((clusteringXTable) => {
        clusteringXTable.forEach((gridItem) => {
          if (gridItem instanceof Cluster) {
            const clusterContent = ReactDOMServer.renderToString(
              <ClusterIcon meetingNumber={gridItem.markers.length} />
            )

            const cluster = new naver.maps.Marker({
              position: new naver.maps.LatLng(
                gridItem.lng as number,
                gridItem.lat as number
              ),
              clickable: true,
              map: mapRef.current!,
              icon: {
                content: clusterContent,
                size: new naver.maps.Size(40, 45),
                anchor: new naver.maps.Point(20, 45)
              }
            })

            newClusters.push(cluster)
          } else if (gridItem.length === 1) {
            gridItem[0].setMap(mapRef.current)
          }
        })
      })

      setExistCluster(newClusters)
    }
  }

  const setGroupingGrid = (markerList: naver.maps.Marker[]) => {
    const mapBound = mapRef.current?.getBounds()
    const mapZoomLevel = mapRef.current?.getZoom()

    if (!mapBound || !mapZoomLevel) return

    const gridWidthNum = mapZoomLevel >= 14 ? 5 : 3
    const gridHeightNum = mapZoomLevel >= 14 ? 7 : 4

    const gridWidth = (mapBound?.maxX() - mapBound?.minX()) / gridWidthNum
    const gridHeight = (mapBound?.maxY() - mapBound?.minY()) / gridHeightNum

    const markerGridTable: naver.maps.Marker[][][] = Array.from(
      { length: gridHeightNum },
      () => {
        return Array.from({ length: gridWidthNum }, () => {
          return []
        })
      }
    )
    markerList.forEach((nowMarker) => {
      const { x, y } = nowMarker.getPosition()
      const gridXPos = Math.floor((mapBound.maxX() - x) / gridWidth)
      const gridYPos = Math.floor((mapBound.maxY() - y) / gridHeight)

      markerGridTable[gridYPos][gridXPos].push(nowMarker)
    })
    return markerGridTable
  }

  const setClusteringGrid = (markerGridTable?: naver.maps.Marker[][][]) => {
    if (!markerGridTable) return

    const markerMap = markerGridTable.map((markerGridXTable) => {
      return markerGridXTable.map((markers) => {
        if (markers.length < 2) {
          return markers
        } else {
          const { x, y } = markers[0].getPosition()
          markers.forEach((newMarker) => newMarker.setMap(null))
          return new Cluster(markers, x, y)
        }
      })
    })
    return markerMap
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
