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
  priceDiscount?: string
}

const Cart = {
  CartNew: (props: CartProps) => {
    const {
      name,
      path,
      onClick,
      star,
      image,
      tag,
      className,
      price,
      priceDiscount,
    } = props
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
              <div className={tag}>
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
  },
  CartHotDeal: (props: CartProps) => {
    const {
      name,
      path,
      onClick,
      star,
      image,
      tag,
      className,
      price,
      priceDiscount,
    } = props
    return (
      <>
        <div className="item">
          <div className="products">
            <div className="hot-deal-wrapper">
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="sale-offer-tag">
                <span>
                  {/* 49%
                  <br />
                  off */}
                  {tag}
                </span>
              </div>
              <div className="timing-wrapper">
                <div className="box-wrapper">
                  <div className="date box">
                    <span className="key">120</span>
                    <span className="value">DAYS</span>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="hour box">
                    <span className="key">20</span>
                    <span className="value">HRS</span>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="minutes box">
                    <span className="key">36</span>
                    <span className="value">MINS</span>
                  </div>
                </div>
                <div className="box-wrapper hidden-md">
                  <div className="seconds box">
                    <span className="key">60</span>
                    <span className="value">SEC</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /.hot-deal-wrapper */}
            <div className="product-info text-left m-t-20">
              <h3 className="name">
                <Link to={path}>{name}</Link>
              </h3>
              <div className="rating rateit-small" />
              <div className="product-price">
                <span className="price"> {price}</span>
                <span className="price-before-discount">{priceDiscount}</span>
              </div>
              {/* /.product-price */}
            </div>
            {/* /.product-info */}
            <div className="cart clearfix animate-effect">
              <div className="action">
                <div className="add-cart-button btn-group">
                  <Button
                    onClick={() => alert('Hello')}
                    className="btn btn-primary icon"
                    data-toggle="dropdown"
                    dataToggle=""
                  >
                    <i className="fa fa-shopping-cart" />
                  </Button>

                  <Button
                    className="btn btn-primary cart-btn"
                    onClick={() => alert('Hello')}
                    label="Add to cart"
                  />
                </div>
              </div>
              {/* /.action */}
            </div>
            {/* /.cart */}
          </div>
        </div>
      </>
    )
  },
}

export default Cart
