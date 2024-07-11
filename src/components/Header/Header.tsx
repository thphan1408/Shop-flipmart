import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="bg-[#157ed2]">
      {/* ============================================== TOP MENU ============================================== */}
      <div className="p-0 text-[12px] animate-dropdown ">
        <div className="px-[15px] mx-auto">
          <div className="text-center">
            <div className="float-right px-0 py-[6px]">
              <ul className="m-0">
                <li className="inline-block leading-[12px] pl-[7px] pr-[12px] py-[3px] border-r-[1px_solid_rgba(255,255,255,0.2)] last:border-none last:pr-0">
                  <a
                    href="#"
                    className="text-[rgba(255,_255,_255,_0.8)] p-0 font-normal transition-all duration-200 ease-linear focus:no-underline hover:no-underline"
                  >
                    <i className="block float-left pr-[6px] text-[11px] fa fa-user" />
                    My Account
                  </a>
                </li>
                <li className="inline-block leading-[12px] pl-[7px] pr-[12px] py-[3px] border-r-[1px_solid_rgba(255,255,255,0.2)] last:border-none last:pr-0">
                  <a
                    href="#"
                    className="text-[rgba(255,_255,_255,_0.8)] p-0 font-normal transition-all duration-200 ease-linear focus:no-underline hover:no-underline"
                  >
                    <i className="block float-left pr-[6px] text-[11px] fa fa-heart" />
                    Wishlist
                  </a>
                </li>
                <li className="inline-block leading-[12px] pl-[7px] pr-[12px] py-[3px] border-r-[1px_solid_rgba(255,255,255,0.2)] last:border-none last:pr-0">
                  <a
                    href="#"
                    className="text-[rgba(255,_255,_255,_0.8)] p-0 font-normal transition-all duration-200 ease-linear focus:no-underline hover:no-underline"
                  >
                    <i className="block float-left pr-[6px] text-[11px] fa fa-shopping-cart" />
                    My Cart
                  </a>
                </li>
                <li className="inline-block leading-[12px] pl-[7px] pr-[12px] py-[3px] border-r-[1px_solid_rgba(255,255,255,0.2)] last:border-none last:pr-0">
                  <a
                    href="#"
                    className="text-[rgba(255,_255,_255,_0.8)] p-0 font-normal transition-all duration-200 ease-linear focus:no-underline hover:no-underline"
                  >
                    <i className="block float-left pr-[6px] text-[11px] fa fa-check" />
                    Checkout
                  </a>
                </li>
                <li className="inline-block leading-[12px] pl-[7px] pr-[12px] py-[3px] border-r-[1px_solid_rgba(255,255,255,0.2)] last:border-none last:pr-0">
                  <a
                    href="#"
                    className="text-[rgba(255,_255,_255,_0.8)] p-0 font-normal transition-all duration-200 ease-linear focus:no-underline hover:no-underline"
                  >
                    <i className="block float-left pr-[6px] text-[11px] fa fa-lock" />
                    Login
                  </a>
                </li>
              </ul>
            </div>
            {/* /.cnt-account */}

            <div className="float-right">
              <ul className="m-0">
                <li className="dropdown dropdown-small inline-block mr-[10px] p-0">
                  <a
                    href="#"
                    className="dropdown-toggle px-0 py-[7px] transition-all duration-200 ease-linear text-[#888] inline-block focus:no-underline focus:text-[#888] hover:no-underline hover:text-[#888]"
                    data-hover="dropdown"
                    data-toggle="dropdown"
                  >
                    <span className="text-[rgba(255,_255,_255,_0.8)] ml-[7px] mr-[4px] my-[2px]">
                      USD
                    </span>
                    <b className="caret" />
                  </a>
                  <ul className="rounded-none [box-shadow:none] border-[1px] border-[solid] border-[#e1e1e1] top-[125%] left-[5px]">
                    <li>
                      <a
                        href="#"
                        className="px-[10px] py-[3px] text-[13px] focus:bg-[rgba(0,_0,_0,_0)] hover:bg-[rgba(0,_0,_0,_0)]"
                      >
                        USD
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-[10px] py-[3px] text-[13px] focus:bg-[rgba(0,_0,_0,_0)] hover:bg-[rgba(0,_0,_0,_0)]"
                      >
                        INR
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-[10px] py-[3px] text-[13px] focus:bg-[rgba(0,_0,_0,_0)] hover:bg-[rgba(0,_0,_0,_0)]"
                      >
                        GBP
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-small inline-block mr-[10px] p-0">
                  <a
                    href="#"
                    className="dropdown-toggle px-0 py-[7px] transition-all duration-200 ease-linear text-[#888] inline-block focus:no-underline focus:text-[#888] hover:no-underline hover:text-[#888]"
                    data-hover="dropdown"
                    data-toggle="dropdown"
                  >
                    <span className="text-[rgba(255,_255,_255,_0.8)] ml-[7px] mr-[4px] my-[2px]">
                      English
                    </span>
                    <b className="caret" />
                  </a>
                  <ul className="rounded-none [box-shadow:none] border-[1px] border-[solid] border-[#e1e1e1] top-[125%] left-[5px]">
                    <li>
                      <a
                        href="#"
                        className="px-[10px] py-[3px] text-[13px] focus:bg-[rgba(0,_0,_0,_0)] hover:bg-[rgba(0,_0,_0,_0)]"
                      >
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-[10px] py-[3px] text-[13px] focus:bg-[rgba(0,_0,_0,_0)] hover:bg-[rgba(0,_0,_0,_0)]"
                      >
                        French
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-[10px] py-[3px] text-[13px] focus:bg-[rgba(0,_0,_0,_0)] hover:bg-[rgba(0,_0,_0,_0)]"
                      >
                        German
                      </a>
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

      <div className="px-0 pt-[5px] pb-[12px]">
        <div className="px-[15px] mx-auto">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 mt-[10px]">
              {/* ============================================================= LOGO ============================================================= */}
              <div className="logo">
                <a href="home.html">
                  <img src="assets\images\logo.png" alt="logo" />
                </a>
              </div>
              {/* /.logo */}
              {/* ============================================================= LOGO : END ============================================================= */}
            </div>
            {/* /.logo-holder */}
            <div className="col-xs-12 col-sm-12 col-md-7 leading-[20px] text-[#9b9b9b]">
              {/* /.contact-row */}
              {/* ============================================================= SEARCH AREA ============================================================= */}
              <div className="mt-[8px] mx-[0] mb-[0] bg-[#fff] rounded-[2px]">
                <form>
                  <div className="control-group">
                    <ul className="border-r-[1px_solid_#e0e0e0] capitalize inline-block leading-[44px] bg-[#f6f6f6] rounded-tl-[3px] rounded-br-none rounded-tr-none rounded-bl-[3px] animate-dropdown">
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle px-[10px] py-[0] text-[#666] text-[13px]"
                          data-toggle="dropdown"
                          href="category.html"
                        >
                          Categories <b className="ml-[15px] text-[#a0a0a0]" />
                        </a>
                        <ul
                          className="[box-shadow:none] border-[1px] border-[solid] border-[#e1e1e1] px-[17px] py-[12px] rounded-none hidden "
                          role="menu"
                        >
                          <li className="font-['Open_Sans',_sans-serif] leading-[30px] mb-[10px]">
                            Computer
                          </li>
                          <li role="presentation" className="mb-[10px]">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href="category.html"
                              className="p-0 hover:bg-[rgba(0,0,0,0)] focus:bg-[rgba(0,0,0,0)]"
                            >
                              - Clothing
                            </a>
                          </li>
                          <li role="presentation" className="mb-[10px]">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href="category.html"
                              className="p-0  hover:bg-[rgba(0,0,0,0)] focus:bg-[rgba(0,0,0,0)]"
                            >
                              - Electronics
                            </a>
                          </li>
                          <li role="presentation" className="mb-[10px]">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href="category.html"
                              className="p-0  hover:bg-[rgba(0,0,0,0)] focus:bg-[rgba(0,0,0,0)]"
                            >
                              - Shoes
                            </a>
                          </li>
                          <li role="presentation" className="mb-[10px]">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href="category.html"
                              className="p-0  hover:bg-[rgba(0,0,0,0)] focus:bg-[rgba(0,0,0,0)]"
                            >
                              - Watches
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <input
                      className="border-[medium] border-[none] rounded-tl-[5px] rounded-br-[0] rounded-tr-[0] rounded-bl-[5px] p-[13px] w-[67%]"
                      placeholder="Search here..."
                    />
                    <a
                      className="rounded-tl-none rounded-br-[3px] rounded-tr-[3px] rounded-bl-none inline-block float-right m-0 px-[19px] py-[12px] text-center bg-[#fdd922] border-[1px] border-[solid] border-[#e0bc27]"
                      href="#"
                    />
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
