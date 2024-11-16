export interface NaverMapComponentProps {
  className?: string
  width?: number
  height?: number
}

export interface MakersProps {
  x: number
  y: number
  category: string
}

export class Cluster {
  markers: naver.maps.Marker[]
  x: number | string
  y: number | string

  constructor(
    markers: naver.maps.Marker[],
    x: number | string,
    y: number | string
  ) {
    this.markers = markers
    this.x = x
    this.y = y
  }
}
