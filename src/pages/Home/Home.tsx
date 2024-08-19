import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getAllProduct } from '../../apis/productServices'
import {
  Card,
  NewsLetters,
  OwlCarouselComponent,
  Products,
  SideMenu,
  Special,
} from '../../components'
import animationData from '../../lotties/lottieFiles.json'
import Lottie from 'react-lottie'
import { images } from '../../utils/images'
import { Link } from 'react-router-dom'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

interface ISliderProps {
  imageBackground: string
  path: string
  title: string
  subTitle: string | React.ReactNode
  description: string
}

const SliderComp = ({
  imageBackground,
  path,
  title,
  subTitle,
  description,
}: ISliderProps) => {
  return (
    <div
      className="item"
      style={{ backgroundImage: `url(${imageBackground})` }}
    >
      <div className="container-fluid">
        <div className="caption bg-color vertical-center text-left">
          <div className="slider-header fadeInDown-1">{title}</div>
          <div className="big-text fadeInDown-1">{subTitle}</div>
          <div className="excerpt fadeInDown-2 hidden-xs">
            <span>{description}</span>
          </div>
          <div className="button-holder fadeInDown-3">
            <Link
              to={path}
              className="btn-lg btn btn-uppercase btn-primary shop-now-button"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* /.caption */}
      </div>
      {/* /.container-fluid */}
    </div>
  )
}

export default function Home() {
  const [dataParam, setDataParam] = useState<object>({
    skip: 0,
    limit: 20,
    search: '',
  })

  const { data: productData, isLoading } = useQuery({
    queryKey: [
      'item_product',
      dataParam?.limit,
      dataParam?.skip,
      dataParam?.search,
    ],
    queryFn: async () => {
      const res = await getAllProduct(dataParam)
      return res?.data?.products
    },
  })

  if (isLoading)
    return (
      <>
        <Lottie options={defaultOptions} height={150} width={150}></Lottie>
      </>
    )

  return (
    <>
      <div
        className="body-content outer-top-xs outer-bottom-xs"
        id="top-banner-and-menu"
      >
        <div className="Container">
          <div className="row">
            {/* ============================================== SIDEBAR ============================================== */}
            <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
              <SideMenu />
              <Card.CardHotDeal
                name="Floral Print Buttoned"
                path="#"
                price="$600.00"
                priceDiscount="$800.00"
                image={images.product1}
                titleDiscount="49%"
              />
              <Special.Offer />
              <Products.ProductTags />
              <Special.Deals />
              <NewsLetters />
              <Card.CardTesmonial />
              <div className="home-banner">
                <img src={images.LHSBanner} alt="" />
              </div>
            </div>
            {/* ============================================== SIDEBAR : END ============================================== */}

            {/* ============================================== CONTENT ============================================== */}
            <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
              {/* ========================================== SECTION – HERO ========================================= */}
              <div id="hero">
                <OwlCarouselComponent
                  id="owl-main"
                  className="owl-carousel owl-inner-nav owl-ui-sm"
                  dots={false}
                >
                  <SliderComp
                    imageBackground={images.slider1}
                    title="Top Brands"
                    subTitle="New Collections"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit."
                    path="#"
                  />
                  <SliderComp
                    imageBackground={images.slider2}
                    title="Spring 2016"
                    subTitle={
                      <>
                        Women <span className="highlight">Fashion</span>
                      </>
                    }
                    description="Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit"
                    path="#"
                  />
                </OwlCarouselComponent>
                {/* /.owl-carousel */}
              </div>
              {/* ========================================= SECTION – HERO : END ========================================= */}
              {/* ============================================== INFO BOXES ============================================== */}
              <div className="info-boxes wow fadeInUp">
                <div className="info-boxes-inner">
                  <div className="row">
                    <div className="col-md-6 col-sm-4 col-lg-4">
                      <div className="info-box">
                        <div className="row">
                          <div className="col-xs-12">
                            <h4 className="info-box-heading green">
                              money back
                            </h4>
                          </div>
                        </div>
                        <h6 className="text">30 Days Money Back Guarantee</h6>
                      </div>
                    </div>
                    {/* .col */}
                    <div className="hidden-md col-sm-4 col-lg-4">
                      <div className="info-box">
                        <div className="row">
                          <div className="col-xs-12">
                            <h4 className="info-box-heading green">
                              free shipping
                            </h4>
                          </div>
                        </div>
                        <h6 className="text">Shipping on orders over $99</h6>
                      </div>
                    </div>
                    {/* .col */}
                    <div className="col-md-6 col-sm-4 col-lg-4">
                      <div className="info-box">
                        <div className="row">
                          <div className="col-xs-12">
                            <h4 className="info-box-heading green">
                              Special Sale
                            </h4>
                          </div>
                        </div>
                        <h6 className="text">Extra $5 off on all items</h6>
                      </div>
                    </div>
                    {/* .col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.info-boxes-inner */}
              </div>
              {/* /.info-boxes */}
              {/* ============================================== INFO BOXES : END ============================================== */}

              {/* ============================================== SCROLL TABS ============================================== */}
              {/* <Products.ProductNews /> */}
              {/* ============================================== SCROLL TABS : END ============================================== */}

              {/* ============================================== WIDE PRODUCTS ============================================== */}
              <div className="wide-banners wow fadeInUp outer-bottom-xs">
                <div className="row">
                  <div className="col-md-7 col-sm-7">
                    <div className="wide-banner cnt-strip">
                      <div className="image">
                        <img
                          className="img-responsive"
                          src="assets\images\banners\home-banner1.jpg"
                        />
                      </div>
                    </div>
                    {/* /.wide-banner */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-5 col-sm-5">
                    <div className="wide-banner cnt-strip">
                      <div className="image">
                        <img
                          className="img-responsive"
                          src="assets\images\banners\home-banner2.jpg"
                        />
                      </div>
                    </div>
                    {/* /.wide-banner */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.wide-banners */}
              {/* ============================================== WIDE PRODUCTS : END ============================================== */}
              {/* ============================================== FEATURED PRODUCTS ============================================== */}
              <section className="section featured-product wow fadeInUp">
                <h3 className="section-title">Featured products</h3>
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img src="assets\images\products\p5.jpg" alt="" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag hot">
                            <span>hot</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img src="assets\images\products\p6.jpg" alt="" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag new">
                            <span>new</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img
                                src="assets\images\blank.gif"
                                data-echo="assets/images/products/p7.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag sale">
                            <span>sale</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img src="assets\images\products\p8.jpg" alt="" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag hot">
                            <span>hot</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img src="assets\images\products\p9.jpg" alt="" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag new">
                            <span>new</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img
                                src="assets\images\products\p10.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag sale">
                            <span>sale</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                </div>
                {/* /.home-owl-carousel */}
              </section>
              {/* /.section */}
              {/* ============================================== FEATURED PRODUCTS : END ============================================== */}
              {/* ============================================== WIDE PRODUCTS ============================================== */}
              <div className="wide-banners wow fadeInUp outer-bottom-xs">
                <div className="row">
                  <div className="col-md-12">
                    <div className="wide-banner cnt-strip">
                      <div className="image">
                        <img
                          className="img-responsive"
                          src="assets\images\banners\home-banner.jpg"
                          alt=""
                        />
                      </div>
                      <div className="strip strip-text">
                        <div className="strip-inner">
                          <h2 className="text-right">
                            New Mens Fashion
                            <br />
                            <span className="shopping-needs">
                              Save up to 40% off
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="new-label">
                        <div className="text">NEW</div>
                      </div>
                      {/* /.new-label */}
                    </div>
                    {/* /.wide-banner */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.wide-banners */}
              {/* ============================================== WIDE PRODUCTS : END ============================================== */}
              {/* ============================================== BEST SELLER ============================================== */}
              <div className="best-deal wow fadeInUp outer-bottom-xs">
                <h3 className="section-title">Best seller</h3>
                <div className="sidebar-widget-body outer-top-xs">
                  <div className="owl-carousel best-seller custom-carousel owl-theme outer-top-xs">
                    <div className="item">
                      <div className="products best-product">
                        <div className="product">
                          <div className="product-micro">
                            <div className="row product-micro-row">
                              <div className="col col-xs-5">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img
                                        src="assets\images\products\p20.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  {/* /.image */}
                                </div>
                                {/* /.product-image */}
                              </div>
                              {/* /.col */}
                              <div className="col2 col-xs-7">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="#">Floral Print Buttoned</a>
                                  </h3>
                                  <div className="rating rateit-small" />
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
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
                        <div className="product">
                          <div className="product-micro">
                            <div className="row product-micro-row">
                              <div className="col col-xs-5">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img
                                        src="assets\images\products\p21.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  {/* /.image */}
                                </div>
                                {/* /.product-image */}
                              </div>
                              {/* /.col */}
                              <div className="col2 col-xs-7">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="#">Floral Print Buttoned</a>
                                  </h3>
                                  <div className="rating rateit-small" />
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="products best-product">
                        <div className="product">
                          <div className="product-micro">
                            <div className="row product-micro-row">
                              <div className="col col-xs-5">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img
                                        src="assets\images\products\p22.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  {/* /.image */}
                                </div>
                                {/* /.product-image */}
                              </div>
                              {/* /.col */}
                              <div className="col2 col-xs-7">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="#">Floral Print Buttoned</a>
                                  </h3>
                                  <div className="rating rateit-small" />
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
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
                        <div className="product">
                          <div className="product-micro">
                            <div className="row product-micro-row">
                              <div className="col col-xs-5">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img
                                        src="assets\images\products\p23.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  {/* /.image */}
                                </div>
                                {/* /.product-image */}
                              </div>
                              {/* /.col */}
                              <div className="col2 col-xs-7">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="#">Floral Print Buttoned</a>
                                  </h3>
                                  <div className="rating rateit-small" />
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="products best-product">
                        <div className="product">
                          <div className="product-micro">
                            <div className="row product-micro-row">
                              <div className="col col-xs-5">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img
                                        src="assets\images\products\p24.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  {/* /.image */}
                                </div>
                                {/* /.product-image */}
                              </div>
                              {/* /.col */}
                              <div className="col2 col-xs-7">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="#">Floral Print Buttoned</a>
                                  </h3>
                                  <div className="rating rateit-small" />
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
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
                        <div className="product">
                          <div className="product-micro">
                            <div className="row product-micro-row">
                              <div className="col col-xs-5">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img
                                        src="assets\images\products\p25.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  {/* /.image */}
                                </div>
                                {/* /.product-image */}
                              </div>
                              {/* /.col */}
                              <div className="col2 col-xs-7">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="#">Floral Print Buttoned</a>
                                  </h3>
                                  <div className="rating rateit-small" />
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="products best-product">
                        <div className="product">
                          <div className="product-micro">
                            <div className="row product-micro-row">
                              <div className="col col-xs-5">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img
                                        src="assets\images\products\p26.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  {/* /.image */}
                                </div>
                                {/* /.product-image */}
                              </div>
                              {/* /.col */}
                              <div className="col2 col-xs-7">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="#">Floral Print Buttoned</a>
                                  </h3>
                                  <div className="rating rateit-small" />
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
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
                        <div className="product">
                          <div className="product-micro">
                            <div className="row product-micro-row">
                              <div className="col col-xs-5">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img
                                        src="assets\images\products\p27.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  {/* /.image */}
                                </div>
                                {/* /.product-image */}
                              </div>
                              {/* /.col */}
                              <div className="col2 col-xs-7">
                                <div className="product-info">
                                  <h3 className="name">
                                    <a href="#">Floral Print Buttoned</a>
                                  </h3>
                                  <div className="rating rateit-small" />
                                  <div className="product-price">
                                    <span className="price"> $450.99 </span>
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
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.sidebar-widget-body */}
              </div>
              {/* /.sidebar-widget */}
              {/* ============================================== BEST SELLER : END ============================================== */}
              {/* ============================================== BLOG SLIDER ============================================== */}
              <section className="section latest-blog outer-bottom-vs wow fadeInUp">
                <h3 className="section-title">latest form blog</h3>
                <div className="blog-slider-container outer-top-xs">
                  <div className="owl-carousel blog-slider custom-carousel">
                    <div className="item">
                      <div className="blog-post">
                        <div className="blog-post-image">
                          <div className="image">
                            <a href="blog.html">
                              <img
                                src="assets\images\blog-post\post1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        {/* /.blog-post-image */}
                        <div className="blog-post-info text-left">
                          <h3 className="name">
                            <a href="#">
                              Voluptatem accusantium doloremque laudantium
                            </a>
                          </h3>
                          <span className="info">
                            By Jone Doe &nbsp;|&nbsp; 21 March 2016
                          </span>
                          <p className="text">
                            Sed quia non numquam eius modi tempora incidunt ut
                            labore et dolore magnam aliquam quaerat voluptatem.
                          </p>
                          <a href="#" className="lnk btn btn-primary">
                            Read more
                          </a>
                        </div>
                        {/* /.blog-post-info */}
                      </div>
                      {/* /.blog-post */}
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div className="blog-post">
                        <div className="blog-post-image">
                          <div className="image">
                            <a href="blog.html">
                              <img
                                src="assets\images\blog-post\post2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        {/* /.blog-post-image */}
                        <div className="blog-post-info text-left">
                          <h3 className="name">
                            <a href="#">
                              Dolorem eum fugiat quo voluptas nulla pariatur
                            </a>
                          </h3>
                          <span className="info">
                            By Saraha Smith &nbsp;|&nbsp; 21 March 2016
                          </span>
                          <p className="text">
                            Sed quia non numquam eius modi tempora incidunt ut
                            labore et dolore magnam aliquam quaerat voluptatem.
                          </p>
                          <a href="#" className="lnk btn btn-primary">
                            Read more
                          </a>
                        </div>
                        {/* /.blog-post-info */}
                      </div>
                      {/* /.blog-post */}
                    </div>
                    {/* /.item */}
                    {/* /.item */}
                    <div className="item">
                      <div className="blog-post">
                        <div className="blog-post-image">
                          <div className="image">
                            <a href="blog.html">
                              <img
                                src="assets\images\blog-post\post1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        {/* /.blog-post-image */}
                        <div className="blog-post-info text-left">
                          <h3 className="name">
                            <a href="#">
                              Dolorem eum fugiat quo voluptas nulla pariatur
                            </a>
                          </h3>
                          <span className="info">
                            By Saraha Smith &nbsp;|&nbsp; 21 March 2016
                          </span>
                          <p className="text">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium
                          </p>
                          <a href="#" className="lnk btn btn-primary">
                            Read more
                          </a>
                        </div>
                        {/* /.blog-post-info */}
                      </div>
                      {/* /.blog-post */}
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div className="blog-post">
                        <div className="blog-post-image">
                          <div className="image">
                            <a href="blog.html">
                              <img
                                src="assets\images\blog-post\post2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        {/* /.blog-post-image */}
                        <div className="blog-post-info text-left">
                          <h3 className="name">
                            <a href="#">
                              Dolorem eum fugiat quo voluptas nulla pariatur
                            </a>
                          </h3>
                          <span className="info">
                            By Saraha Smith &nbsp;|&nbsp; 21 March 2016
                          </span>
                          <p className="text">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium
                          </p>
                          <a href="#" className="lnk btn btn-primary">
                            Read more
                          </a>
                        </div>
                        {/* /.blog-post-info */}
                      </div>
                      {/* /.blog-post */}
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div className="blog-post">
                        <div className="blog-post-image">
                          <div className="image">
                            <a href="blog.html">
                              <img
                                src="assets\images\blog-post\post1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        {/* /.blog-post-image */}
                        <div className="blog-post-info text-left">
                          <h3 className="name">
                            <a href="#">
                              Dolorem eum fugiat quo voluptas nulla pariatur
                            </a>
                          </h3>
                          <span className="info">
                            By Saraha Smith &nbsp;|&nbsp; 21 March 2016
                          </span>
                          <p className="text">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium
                          </p>
                          <a href="#" className="lnk btn btn-primary">
                            Read more
                          </a>
                        </div>
                        {/* /.blog-post-info */}
                      </div>
                      {/* /.blog-post */}
                    </div>
                    {/* /.item */}
                  </div>
                  {/* /.owl-carousel */}
                </div>
                {/* /.blog-slider-container */}
              </section>
              {/* /.section */}
              {/* ============================================== BLOG SLIDER : END ============================================== */}
              {/* ============================================== FEATURED PRODUCTS ============================================== */}
              <section className="section wow fadeInUp new-arriavls">
                <h3 className="section-title">New Arrivals</h3>
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img
                                src="assets\images\products\p19.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag new">
                            <span>new</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img
                                src="assets\images\products\p28.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag new">
                            <span>new</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img
                                src="assets\images\products\p30.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag hot">
                            <span>hot</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img src="assets\images\products\p1.jpg" alt="" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag hot">
                            <span>hot</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img src="assets\images\products\p2.jpg" alt="" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag sale">
                            <span>sale</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img src="assets\images\products\p3.jpg" alt="" />
                            </a>
                          </div>
                          {/* /.image */}
                          <div className="tag sale">
                            <span>sale</span>
                          </div>
                        </div>
                        {/* /.product-image */}
                        <div className="product-info text-left">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="description" />
                          <div className="product-price">
                            <span className="price"> $450.99 </span>
                            <span className="price-before-discount">$ 800</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button
                                  className="btn btn-primary icon"
                                  data-toggle="dropdown"
                                  type="button"
                                >
                                  <i className="fa fa-shopping-cart" />
                                </button>
                                <button
                                  className="btn btn-primary cart-btn"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="lnk wishlist">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Wishlist"
                                >
                                  <i className="icon fa fa-heart" />
                                </a>
                              </li>
                              <li className="lnk">
                                <a
                                  className="add-to-cart"
                                  href="detail.html"
                                  title="Compare"
                                >
                                  <i
                                    className="fa fa-signal"
                                    aria-hidden="true"
                                  />
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
                    {/* /.products */}
                  </div>
                  {/* /.item */}
                </div>
                {/* /.home-owl-carousel */}
              </section>
              {/* /.section */}
              {/* ============================================== FEATURED PRODUCTS : END ============================================== */}
            </div>
            {/* /.homebanner-holder */}
            {/* ============================================== CONTENT : END ============================================== */}
          </div>
        </div>
      </div>
    </>
  )
}
