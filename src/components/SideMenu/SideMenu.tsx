import React from 'react'
import { MenuItems } from '../../constants'
import { Link } from 'react-router-dom'

interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = () => {
  return (
    <>
      <div className="side-menu animate-dropdown outer-bottom-xs">
        <div className="head">
          <i className="icon fa fa-align-justify fa-fw" /> Categories
        </div>
        <nav className="yamm megamenu-horizontal">
          <ul className="nav">
            {Object.entries(MenuItems).map(
              ([category, { icon, items }], index) => {
                return (
                  <li className="dropdown menu-item" key={index}>
                    <Link
                      to="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className={icon} aria-hidden="true" />
                      {category}
                    </Link>
                    {items && items.length > 0 && (
                      <ul className="dropdown-menu mega-menu">
                        <li className="yamm-content">
                          <li className="yamm-content">
                            <div className="row">
                              {items.map((item) => {
                                return (
                                  <div
                                    className="col-sm-12 col-md-3"
                                    key={item.id}
                                  >
                                    <Link to={item.url}>{item.name}</Link>
                                    {/* <ul className="links list-unstyled">
                                        <li >
                                        </li>
                                      </ul> */}
                                  </div>
                                )
                              })}
                              {/* /.col */}
                            </div>
                            {/* /.row */}
                          </li>
                          {/* /.row */}
                        </li>

                        {/* /.yamm-content */}
                      </ul>
                    )}

                    {/* /.dropdown-menu */}
                  </li>
                )
              },
            )}

            {/* /.menu-item */}
          </ul>
          {/* /.nav */}
        </nav>
        {/* /.megamenu-horizontal */}
      </div>
    </>
  )
}

export default SideMenu
