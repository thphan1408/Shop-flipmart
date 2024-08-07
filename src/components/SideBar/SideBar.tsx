import React from 'react'
import SideMenu from '../SideMenu/SideMenu'
import Cart from '../Cart/Cart'
import { images } from '../../utils/images'
import { PATHS } from '../../utils/paths'

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <>
      <SideMenu />

      {/* ============================================== HOT DEALS ============================================== */}
      <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
        <h3 className="section-title">hot deals</h3>
        <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
          <div className="item">
            <div className="products">
              <div className="hot-deal-wrapper">
                <div className="image">
                  <img src="assets\images\hot-deals\p25.jpg" alt="" />
                </div>
                <div className="sale-offer-tag">
                  <span>
                    49%
                    <br />
                    off
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
                  <a href="detail.html">Floral Print Buttoned</a>
                </h3>
                <div className="rating rateit-small" />
                <div className="product-price">
                  <span className="price"> $600.00 </span>
                  <span className="price-before-discount">$800.00</span>
                </div>
                {/* /.product-price */}
              </div>
              {/* /.product-info */}
              <div className="cart clearfix animate-effect">
                <div className="action">
                  <div className="add-cart-button btn-group">
                    <button
                      className="btn btn-primary icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="fa fa-shopping-cart" />
                    </button>
                    <button className="btn btn-primary cart-btn" type="button">
                      Add to cart
                    </button>
                  </div>
                </div>
                {/* /.action */}
              </div>
              {/* /.cart */}
            </div>
          </div>
          <div className="item">
            <div className="products">
              <div className="hot-deal-wrapper">
                <div className="image">
                  <img src="assets\images\hot-deals\p5.jpg" alt="" />
                </div>
                <div className="sale-offer-tag">
                  <span>
                    35%
                    <br />
                    off
                  </span>
                </div>
                <div className="timing-wrapper">
                  <div className="box-wrapper">
                    <div className="date box">
                      <span className="key">120</span>
                      <span className="value">Days</span>
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
                  <a href="detail.html">Floral Print Buttoned</a>
                </h3>
                <div className="rating rateit-small" />
                <div className="product-price">
                  <span className="price"> $600.00 </span>
                  <span className="price-before-discount">$800.00</span>
                </div>
                {/* /.product-price */}
              </div>
              {/* /.product-info */}
              <div className="cart clearfix animate-effect">
                <div className="action">
                  <div className="add-cart-button btn-group">
                    <button
                      className="btn btn-primary icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="fa fa-shopping-cart" />
                    </button>
                    <button className="btn btn-primary cart-btn" type="button">
                      Add to cart
                    </button>
                  </div>
                </div>
                {/* /.action */}
              </div>
              {/* /.cart */}
            </div>
          </div>
          <div className="item">
            <div className="products">
              <div className="hot-deal-wrapper">
                <div className="image">
                  <img src="assets\images\hot-deals\p10.jpg" alt="" />
                </div>
                <div className="sale-offer-tag">
                  <span>
                    35%
                    <br />
                    off
                  </span>
                </div>
                <div className="timing-wrapper">
                  <div className="box-wrapper">
                    <div className="date box">
                      <span className="key">120</span>
                      <span className="value">Days</span>
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
                  <a href="detail.html">Floral Print Buttoned</a>
                </h3>
                <div className="rating rateit-small" />
                <div className="product-price">
                  <span className="price"> $600.00 </span>
                  <span className="price-before-discount">$800.00</span>
                </div>
                {/* /.product-price */}
              </div>
              {/* /.product-info */}
              <div className="cart clearfix animate-effect">
                <div className="action">
                  <div className="add-cart-button btn-group">
                    <button
                      className="btn btn-primary icon"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="fa fa-shopping-cart" />
                    </button>
                    <button className="btn btn-primary cart-btn" type="button">
                      Add to cart
                    </button>
                  </div>
                </div>
                {/* /.action */}
              </div>
              {/* /.cart */}
            </div>
          </div>
        </div>
        {/* /.sidebar-widget */}
      </div>
      {/* ============================================== HOT DEALS: END ============================================== */}

      {/* ============================================== SPECIAL OFFER ============================================== */}
      <div className="sidebar-widget outer-bottom-small wow fadeInUp">
        <h3 className="section-title">Special Offer</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
            <div className="item">
              <div className="products special-product">
                <div className="product">
                  <div className="product-micro">
                    <div className="row product-micro-row">
                      <div className="col col-xs-5">
                        <div className="product-image">
                          <div className="image">
                            <a href="#">
                              <img
                                src="assets\images\products\p30.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* /.image */}
                        </div>
                        {/* /.product-image */}
                      </div>
                      {/* /.col */}
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
                                src="assets\images\products\p29.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* /.image */}
                        </div>
                        {/* /.product-image */}
                      </div>
                      {/* /.col */}
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
                                src="assets\images\products\p28.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* /.image */}
                        </div>
                        {/* /.product-image */}
                      </div>
                      {/* /.col */}
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
              <div className="products special-product">
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
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
              <div className="products special-product">
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
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
                      <div className="col col-xs-7">
                        <div className="product-info">
                          <h3 className="name">
                            <a href="#">Floral Print Shirt</a>
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
      {/* ============================================== SPECIAL OFFER : END ============================================== */}
    </>
  )
}

export default SideBar
