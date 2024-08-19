import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

interface OwlCarouselProps {
  id?: string
  className?: string
  children?: React.ReactNode
  dots?: boolean
  dataItem?: string
}

const OwlCarouselComponent: React.FC<OwlCarouselProps> = ({
  id,
  children,
  className,
  dots,
  dataItem,
}) => {
  return (
    <OwlCarousel
      id={`${id}`}
      className={`owl-theme ${className}`}
      items={1}
      loop
      // margin={10}
      // nav
      dots={dots}
      data-item={dataItem}
    >
      {children}
    </OwlCarousel>
  )
}

export default OwlCarouselComponent
