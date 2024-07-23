import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

interface CartProps {
  name: string
  path: string
  onClick?: () => void
  star?: number
  image: string
  tag: string
  className?: string
  price: string
  priceDiscount?: number
}

const Cart: React.FC<CartProps> = ({
  name,
  star = 0,
  className,
  image,
  onClick,
  path,
  tag,
  price,
  priceDiscount,
}) => {
  let tagClass =
    tag.toLowerCase() === 'new'
      ? 'bg-[#46aad7]'
      : tag.toLowerCase() === 'hot'
      ? 'bg-[#ff7878]'
      : tag.toLowerCase() === 'sale'
      ? 'bg-[#fdd922] text-[#333]'
      : 'bg-none'

  return (
    <>
      <div className="products">
        <div className="product">
          <div className="product-image">
            <div className="image">
              <a href="detail.html">
                <img src={image} alt="" />
              </a>
            </div>
            {/* /.image */}
            <div className={`tag ${tagClass}`}>
              <span>{tag.toUpperCase()}</span>
            </div>
          </div>
          {/* /.product-image */}
          <div className="product-info text-left">
            <h3 className="name">
              <Link to={path}>{name}</Link>
            </h3>
            <div className="rating rateit-small" />
            <div className="description" />
            <div className="product-price">
              <span className="price">{price}</span>
              <span className="price-before-discount">{priceDiscount}</span>
            </div>
            {/* /.product-price */}
          </div>
          {/* /.product-info */}
          <div className="cart clearfix animate-effect">
            <div className="action">
              <ul className="list-unstyled">
                <li className="add-cart-button btn-group">
                  <button
                    data-toggle="tooltip"
                    className="btn btn-primary icon"
                    type="button"
                    title="Add Cart"
                  >
                    <i className="fa fa-shopping-cart" />
                  </button>
                  {/* <button className="btn btn-primary cart-btn" type="button">
                    Add to cart
                  </button> */}
                </li>
                <li className="lnk wishlist">
                  <a
                    data-toggle="tooltip"
                    className="add-to-cart"
                    href="detail.html"
                    title="Wishlist"
                  >
                    <i className="icon fa fa-heart" />
                  </a>
                </li>
                <li className="lnk">
                  <a
                    data-toggle="tooltip"
                    className="add-to-cart"
                    href="detail.html"
                    title="Compare"
                  >
                    <i className="fa fa-signal" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            {/* /.action */}
          </div>
          {/* /.cart */}
        </div>
        {/* /.product */}
      </div>
    </>
  )
}

export default Cart
