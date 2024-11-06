export interface NaverMapComponentProps {
  className?: string
  width?: number
  height?: number
}

export interface MakersProps {
  lat: number
  lng: number
  category: string
}

export class Cluster {
  markers: naver.maps.Marker[]
  lat: number | string
  lng: number | string

  constructor(
    markers: naver.maps.Marker[],
    lat: number | string,
    lng: number | string
  ) {
    this.markers = markers
    this.lat = lat
    this.lng = lng
  }
}
