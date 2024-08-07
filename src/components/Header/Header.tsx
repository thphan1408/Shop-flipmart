import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { images } from '../../utils/images'
import { Link } from 'react-router-dom'
import { PATHS } from '../../utils/paths'
import { CurrencyAndLanguageItems, NavLinkItems } from '../../constants'
import Search from '../Search/Search'

interface Props {}

const Header: React.FC<Props> = () => {
  const { i18n } = useTranslation()

  const [selectedLanguage, setSelectedLanguage] = useState<string>('English')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD')

  const handleSelectedLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setSelectedLanguage(lang)
  }

  const handleSelectedCurrency = (currency: string) => {
    setSelectedCurrency(currency)
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
            <div className="cnt-block">
              <ul className="list-unstyled list-inline">
                {Object.entries(CurrencyAndLanguageItems).map(
                  ([category, { items }], index) => {
                    return (
                      <li className="dropdown dropdown-small" key={index}>
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-hover="dropdown"
                          data-toggle="dropdown"
                        >
                          <span className="value">
                            {category === 'Currencies'
                              ? selectedCurrency
                              : selectedLanguage}
                          </span>
                          <b className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          {items.map(
                            (item: {
                              id: string
                              path: string
                              title: string
                            }) => {
                              return (
                                <li key={item.id}>
                                  <Link
                                    to={item.path}
                                    onClick={() =>
                                      category === 'Languages'
                                        ? handleSelectedLanguage(item.title)
                                        : handleSelectedCurrency(item.title)
                                    }
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              )
                            },
                          )}
                        </ul>
                      </li>
                    )
                  },
                )}
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
                <Link to={PATHS.HOME.replace('/:lng', i18n.language)}>
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
              <Search />
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
                              <img src={images.product1} alt="" />
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
