import React from 'react'
import { Link } from 'react-router-dom'

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <div className="search-area">
      <form>
        <div className="control-group">
          <ul className="categories-filter animate-dropdown">
            <li className="dropdown">
              <button
                className="dropdown-toggle px-[10px]"
                data-toggle="dropdown"
              >
                Categories <b className="caret" />
              </button>
              <ul className="dropdown-menu" role="menu">
                <li className="menu-header">Computer</li>
                <li role="presentation">
                  <Link role="menuitem" tabIndex={-1} to="category.html">
                    - Clothing
                  </Link>
                </li>
                <li role="presentation">
                  <Link role="menuitem" tabIndex={-1} to="category.html">
                    - Electronics
                  </Link>
                </li>
                <li role="presentation">
                  <Link role="menuitem" tabIndex={-1} to="category.html">
                    - Shoes
                  </Link>
                </li>
                <li role="presentation">
                  <Link role="menuitem" tabIndex={-1} to="category.html">
                    - Watches
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <input className="search-field" placeholder="Search here..." />
          <Link className="search-button" to="#" />
        </div>
      </form>
    </div>
  )
}

export default Search
