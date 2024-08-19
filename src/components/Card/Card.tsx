import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import {
  ICardCompProps,
  ICardNewProps,
  ICardProps,
  ICardSpecialProps,
} from '../../interfaces/Cards.interface'
import { images } from '../../utils/images'
import { TesmonialItems } from '../../constants/TesmonialItems'
import OwlCarouselComponent from '../OwlCarousel/OwlCarousel'

const ProductComp = (props: ICardSpecialProps) => {
  const { name, path, image, price } = props
  return (
    <div className="product">
      <div className="product-micro">
        <div className="row product-micro-row">
          <div className="col col-xs-5">
            <div className="product-image">
              <div className="image">
                <Link to={path}>
                  <img src={image} alt={name} />
                </Link>
              </div>
              {/* /.image */}
            </div>
            {/* /.product-image */}
          </div>
          {/* /.col */}
          <div className="col col-xs-7">
            <div className="product-info">
              <h3 className="name">
                <Link to={path}>{name}</Link>
              </h3>
              {/* rating */}
              <div className="rating rateit-small" />
              <div className="product-price">
                <span className="price">{price}</span>
              </div>
              {/* /.product-price */}
            </div>
          </div>
          {/* /.col */}
        </div>
        {/* /.product-micro-row */}
      </div>
      {/* /.product-micro */}
    </div>
  )
}

const CardComp = (props: ICardCompProps) => {
  const { title, children } = props
  return (
    <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
      <h3 className="section-title">{title}</h3>
      {children}
    </div>
  )
}

const TestimonialsComp = (props: ICardCompProps) => {
  const { children } = props

  return (
    <div className="sidebar-widget wow fadeInUp outer-top-vs">
      <OwlCarouselComponent className="owl-carousel sidebar-carousel custom-carousel outer-top-ss">
        {children}
      </OwlCarouselComponent>
    </div>
  )
}

const Card = {
  CardNew: (props: ICardProps) => {
    const { name, path, image, tag, price, priceDiscount } = props
    return (
      <>
        <div className="products">
          <div className="product">
            <div className="product-image">
              <div className="image">
                <Link to={path}>
                  <img src={image} alt={name} />
                </Link>
              </div>
              {/* /.image */}
              <div className={`tag ${tag}`}>
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
                    <Link
                      data-toggle="tooltip"
                      className="add-to-cart"
                      to={path}
                      title="Wishlist"
                    >
                      <i className="icon fa fa-heart" />
                    </Link>
                  </li>
                  <li className="lnk">
                    <Link
                      data-toggle="tooltip"
                      className="add-to-cart"
                      to={path}
                      title="Compare"
                    >
                      <i className="fa fa-signal" aria-hidden="true" />
                    </Link>
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
  CardHotDeal: (props: ICardNewProps) => {
    const { name, path, image, price, priceDiscount, titleDiscount } = props
    return (
      <>
        <CardComp title="hot deals">
          <OwlCarouselComponent className="owl-carousel sidebar-carousel custom-carousel outer-top-ss">
            <div className="item">
              <div className="products">
                <div className="hot-deal-wrapper">
                  <div className="image">
                    <img src={image} alt="" />
                  </div>
                  <div className="sale-offer-tag">
                    <span>
                      {/* 49%
                  off */}
                      {titleDiscount}
                      <br />
                      OFF
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
                    <span className="price-before-discount">
                      {priceDiscount}
                    </span>
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
          </OwlCarouselComponent>
        </CardComp>
      </>
    )
  },
  CardSpecial: () => {
    return (
      <div className="item">
        <div className="products special-product">
          <ProductComp
            name="Floral Print Shirt"
            path="#"
            price="$450.99"
            image={images.product14}
          />
          <ProductComp
            name="Floral Print Shirt"
            path="#"
            price="$450.99"
            image={images.product15}
          />
          <ProductComp
            name="Floral Print Shirt"
            path="#"
            price="$450.99"
            image={images.product11}
          />
        </div>
      </div>
    )
  },
  CardTesmonial: () => {
    // const { name, companyName, image, description } = props
    return (
      <TestimonialsComp>
        {TesmonialItems.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="avatar">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="testimonials">{item.description}</div>
              <div className="clients_author">
                {item.name} <span>{item.companyName}</span>
              </div>
              {/* /.container-fluid */}
            </div>
          )
        })}
      </TestimonialsComp>
    )
  },
}

export default Card
