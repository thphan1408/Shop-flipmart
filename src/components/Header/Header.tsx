import React from 'react'
import { useTranslation } from 'react-i18next'
import { images } from '../../utils/images'

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="header-style-1">
      {/* ============================================== TOP MENU ============================================== */}
      <div className="top-bar animate-dropdown">
        <div className="container">
          <div className="header-top-inner">
            <div className="cnt-account">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="icon fa fa-user" />
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon fa fa-heart" />
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon fa fa-shopping-cart" />
                    My Cart
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon fa fa-check" />
                    Checkout
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon fa fa-lock" />
                    Login
                  </a>
                </li>
              </ul>
            </div>
            {/* /.cnt-account */}
            <div className="cnt-block">
              <ul className="list-unstyled list-inline">
                <li className="dropdown dropdown-small">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-hover="dropdown"
                    data-toggle="dropdown"
                  >
                    <span className="value">USD </span>
                    <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">USD</a>
                    </li>
                    <li>
                      <a href="#">INR</a>
                    </li>
                    <li>
                      <a href="#">GBP</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-small">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-hover="dropdown"
                    data-toggle="dropdown"
                  >
                    <span className="value">English </span>
                    <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">French</a>
                    </li>
                    <li>
                      <a href="#">German</a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* /.list-unstyled */}
            </div>
            {/* /.cnt-cart */}
            <div className="clearfix" />
          </div>
          {/* /.header-top-inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.header-top */}
      {/* ============================================== TOP MENU : END ============================================== */}
      <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
              {/* ============================================================= LOGO ============================================================= */}
              <div className="logo">
                <a href="home.html">
                  <img src={images.logo} alt="logo" />
                </a>
              </div>
              {/* /.logo */}
              {/* ============================================================= LOGO : END ============================================================= */}
            </div>
            {/* /.logo-holder */}
            <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
              {/* /.contact-row */}
              {/* ============================================================= SEARCH AREA ============================================================= */}
              <div className="search-area">
                <form>
                  <div className="control-group">
                    <ul className="categories-filter animate-dropdown">
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          href="category.html"
                        >
                          Categories <b className="caret" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li className="menu-header">Computer</li>
                          <li role="presentation">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href="category.html"
                            >
                              - Clothing
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href="category.html"
                            >
                              - Electronics
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href="category.html"
                            >
                              - Shoes
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href="category.html"
                            >
                              - Watches
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <input
                      className="search-field"
                      placeholder="Search here..."
                    />
                    <a className="search-button" href="#" />
                  </div>
                </form>
              </div>
              {/* /.search-area */}
              {/* ============================================================= SEARCH AREA : END ============================================================= */}
            </div>
            {/* /.top-search-holder */}
            <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">
              {/* ============================================================= SHOPPING CART DROPDOWN ============================================================= */}
              <div className="dropdown dropdown-cart">
                <a
                  href="#"
                  className="dropdown-toggle lnk-cart"
                  data-toggle="dropdown"
                >
                  <div className="items-cart-inner">
                    <div className="basket">
                      <i className="glyphicon glyphicon-shopping-cart" />
                    </div>
                    <div className="basket-item-count">
                      <span className="count">2</span>
                    </div>
                    <div className="total-price-basket">
                      <span className="lbl">cart -</span>
                      <span className="total-price">
                        <span className="sign">$</span>
                        <span className="value">600.00</span>
                      </span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="cart-item product-summary">
                      <div className="row">
                        <div className="col-xs-4">
                          <div className="image">
                            <a href="detail.html">
                              <img src="assets\images\cart.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-xs-7">
                          <h3 className="name">
                            <a href="index.php?page-detail">Simple Product</a>
                          </h3>
                          <div className="price">$600.00</div>
                        </div>
                        <div className="col-xs-1 action">
                          <a href="#">
                            <i className="fa fa-trash" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.cart-item */}
                    <div className="clearfix" />
                    <hr />
                    <div className="clearfix cart-total">
                      <div className="pull-right">
                        <span className="text">Sub Total :</span>
                        <span className="price">$600.00</span>
                      </div>
                      <div className="clearfix" />
                      <a
                        href="checkout.html"
                        className="btn btn-upper btn-primary btn-block m-t-20"
                      >
                        Checkout
                      </a>
                    </div>
                    {/* /.cart-total*/}
                  </li>
                </ul>
                {/* /.dropdown-menu*/}
              </div>
              {/* /.dropdown-cart */}
              {/* ============================================================= SHOPPING CART DROPDOWN : END============================================================= */}
            </div>
            {/* /.top-cart-row */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.main-header */}
    </header>
  )
}

export default Header
