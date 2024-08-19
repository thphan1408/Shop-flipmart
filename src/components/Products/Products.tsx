import React, { useState } from 'react'
import { ProductTagsItems } from '../../constants/ProductTagsItems'
import { Link } from 'react-router-dom'
import {
  IProductCompProps,
  IProductTagsProps,
} from '../../interfaces/Products.interface'
import OwlCarouselComponent from '../OwlCarousel/OwlCarousel'
import Card from '../Card/Card'
import { images } from '../../utils/images'

const Products = {
  ProductTags: (props: IProductTagsProps) => {
    const { className } = props
    const [activeItem, setActiveItem] = useState<string>(ProductTagsItems[0].id)
    const handleItemClick = (id: string) => {
      setActiveItem(id)
    }

    return (
      <div className={`sidebar-widget product-tag wow fadeInUp ${className}`}>
        <h3 className="section-title">Product tags</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <div className="tag-list">
            {ProductTagsItems.map((item) => (
              <Link
                className={`item ${item.id === activeItem ? 'active' : ''}`}
                title={item.title}
                to={item.path}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {/* /.tag-list */}
        </div>
        {/* /.sidebar-widget-body */}
      </div>
    )
  },
  ProductNews: () => {
    return (
      <ProductComp title={'New Products'} childTab={<NavTabsComp />}>
        <div className="tab-content outer-top-xs">
          <div className="tab-pane in active" id="all">
            <div className="product-slider">
              <OwlCarouselComponent
                className="owl-carousel home-owl-carousel custom-carousel"
                dataItem="4"
                dots={false}
              >
                <div className="item item-carousel">
                  <Card.CardNew
                    name="Floral Print Buttoned"
                    path="#"
                    price="$450.99"
                    priceDiscount="$800"
                    image={images.product1}
                    tag="sale"
                  />
                  {/* /.products */}
                </div>
                <div className="item item-carousel">
                  <Card.CardNew
                    name="Floral Print Buttoned"
                    path="#"
                    price="$450.99"
                    priceDiscount="$800"
                    image={images.product2}
                    tag="hot"
                  />
                  {/* /.products */}
                </div>
              </OwlCarouselComponent>
            </div>
          </div>
        </div>
      </ProductComp>
    )
  },
}

const ProductComp = (props: IProductCompProps) => {
  const { title, children, childTab } = props
  return (
    <div
      id="product-tabs-slider"
      className="scroll-tabs outer-top-vs wow fadeInUp"
    >
      <div className="more-info-tab clearfix">
        <h3 className="new-product-title pull-left">{title}</h3>
        {childTab}
      </div>
      {children}
    </div>
  )
}

const NavTabsComp = () => {
  return (
    <>
      <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
        <li className="active">
          <Link data-transition-type="backSlide" to="#all" data-toggle="tab">
            All
          </Link>
        </li>
        <li>
          <Link
            data-transition-type="backSlide"
            to="#smartphone"
            data-toggle="tab"
          >
            Clothing
          </Link>
        </li>
        <li>
          <Link data-transition-type="backSlide" to="#laptop" data-toggle="tab">
            Electronics
          </Link>
        </li>
        <li>
          <Link data-transition-type="backSlide" to="#apple" data-toggle="tab">
            Shoes
          </Link>
        </li>
      </ul>
      {/* /.nav-tabs */}
    </>
  )
}
export default Products
