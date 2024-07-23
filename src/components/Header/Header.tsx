import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { images } from '../../utils/images'
import { Link } from 'react-router-dom'
import { PATHS } from '../../utils/paths'
import { ConvertLanguages, CurrencyItems, NavLinkItems } from '../../constants'

interface Props {}

const Header: React.FC<Props> = () => {
  const { t } = useTranslation()

  const [selectedLanguage, setSelectedLanguage] = useState<string>('English')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD')

  const handleSeclectedLanguage = (title: string) => {
    setSelectedLanguage(title)
    setSelectedCurrency(title)
  }

  const handleSelectedCurrency = (title: string) => {
    setSelectedCurrency(title)
  }

  return (
    <header className="header-style-1">
      {/* ============================================== TOP MENU ============================================== */}
      <div className="top-bar animate-dropdown">
        <div className="Container">
          <div className="header-top-inner">
            <div className="cnt-account">
              <ul className="list-unstyled">
                {NavLinkItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={item.path}>
                        <i className={item.icon} />
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            {/* /.cnt-account */}
            <div className="cnt-block">
              <ul className="list-unstyled list-inline">
                <li className="dropdown dropdown-small">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-hover="dropdown"
                    data-toggle="dropdown"
                  >
                    <span className="value">{selectedCurrency} </span>
                    <b className="caret" />
                  </Link>
                  <ul className="dropdown-menu">
                    {CurrencyItems.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleSelectedCurrency(item.title)}
                      >
                        <Link to="#">{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="dropdown dropdown-small">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-hover="dropdown"
                    data-toggle="dropdown"
                  >
                    <span className="value">{selectedLanguage}</span>
                    <b className="caret" />
                  </Link>
                  <ul className="dropdown-menu">
                    {ConvertLanguages.map((item) => {
                      return (
                        <li
                          key={item.id}
                          onClick={() => handleSeclectedLanguage(item.title)}
                        >
                          <Link to={item.path}>{item.title}</Link>
                        </li>
                      )
                    })}
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
        <div className="Container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
              {/* ============================================================= LOGO ============================================================= */}
              <div className="logo">
                <Link to={PATHS.HOME}>
                  <img src={images.logo} alt="logo" />
                </Link>
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
                        <Link
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          to="category.html"
                        >
                          Categories <b className="caret" />
                        </Link>
                        <ul className="dropdown-menu" role="menu">
                          <li className="menu-header">Computer</li>
                          <li role="presentation">
                            <Link
                              role="menuitem"
                              tabIndex={-1}
                              to="category.html"
                            >
                              - Clothing
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link
                              role="menuitem"
                              tabIndex={-1}
                              to="category.html"
                            >
                              - Electronics
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link
                              role="menuitem"
                              tabIndex={-1}
                              to="category.html"
                            >
                              - Shoes
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link
                              role="menuitem"
                              tabIndex={-1}
                              to="category.html"
                            >
                              - Watches
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <input
                      className="search-field"
                      placeholder="Search here..."
                    />
                    <Link className="search-button" to="#" />
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
                <Link
                  to="#"
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
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <div className="cart-item product-summary">
                      <div className="row">
                        <div className="col-xs-4">
                          <div className="image">
                            <Link to="detail.html">
                              <img src="assets\images\cart.jpg" alt="" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-xs-7">
                          <h3 className="name">
                            <Link to="index.php?page-detail">
                              Simple Product
                            </Link>
                          </h3>
                          <div className="price">$600.00</div>
                        </div>
                        <div className="col-xs-1 action">
                          <Link to="#">
                            <i className="fa fa-trash" />
                          </Link>
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
                      <Link
                        to="checkout.html"
                        className="btn btn-upper btn-primary btn-block m-t-20"
                      >
                        Checkout
                      </Link>
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
