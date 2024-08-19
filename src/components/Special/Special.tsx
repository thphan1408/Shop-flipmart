import React from 'react'
import { OwlCarouselComponent, Card } from '..'

interface ISpecialCompProps {
  title: string
  children: React.ReactNode
}

const SpecialComp: React.FC<ISpecialCompProps> = ({ title, children }) => {
  return (
    <div className="sidebar-widget outer-bottom-small wow fadeInUp">
      <h3 className="section-title">{title}</h3>
      <div className="sidebar-widget-body outer-top-xs">{children}</div>
    </div>
  )
}

const Special = {
  Offer: () => {
    return (
      <>
        {/* ============================================== SPECIAL OFFER ============================================== */}
        <SpecialComp title="Special Offer">
          <OwlCarouselComponent className="owl-carousel sidebar-carousel special-offer custom-carousel outer-top-xs">
            <Card.CardSpecial />
            <Card.CardSpecial />
            <Card.CardSpecial />
          </OwlCarouselComponent>
        </SpecialComp>
        {/* ============================================== SPECIAL OFFER : END ============================================== */}
      </>
    )
  },
  Deals: () => {
    return (
      <SpecialComp title="Special Deals">
        <OwlCarouselComponent className="owl-carousel sidebar-carousel special-offer custom-carousel outer-top-xs">
          <Card.CardSpecial />
          <Card.CardSpecial />
          <Card.CardSpecial />
        </OwlCarouselComponent>
      </SpecialComp>
    )
  },
}

export default Special
