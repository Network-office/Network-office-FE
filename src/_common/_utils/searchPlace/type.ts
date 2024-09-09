export default interface PlaceTypes {
  addressElements: AddressElementTypes[]
  distance: string | number
  jibunAddress: string
  englishAddress: string
  roadAddress: string
  x: string | number
  y: string | number
}

interface AddressElementTypes {
  code: string
  longName: string
  shortName: string
  types:
    | string
    | Array<
        | "SIDO"
        | "SIGUGUN"
        | "RI"
        | "ROAD_NAME"
        | "BUILDING_NUMBER"
        | "BUILDING_NAME"
        | "LAND_NUMBER"
        | "POSTAL_CODE"
      >
}
