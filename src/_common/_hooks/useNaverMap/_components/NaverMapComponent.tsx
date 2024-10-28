import { forwardRef } from "react"
import { NaverMapComponentProps } from "../types"

const NaverMapComponent = forwardRef<HTMLDivElement, NaverMapComponentProps>(
  ({ className, width = 500, height = 1000 }, mapElement) => {
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
  }
)

NaverMapComponent.displayName = "NaverMapComponent"

export default NaverMapComponent
