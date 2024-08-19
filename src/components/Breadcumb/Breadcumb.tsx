import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface BreadcumbProps {
  basePathName: string
  basePath: string
  className?: string
}

const Breadcumb: React.FC<BreadcumbProps> = ({ basePathName, basePath }) => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (pathnames.length === 0) {
    return null
  }

  return (
    /* /.breadcrumb */
    <div className="breadcrumb">
      <div className="Container">
        <div className="breadcrumb-inner">
          <ul className="list-inline list-unstyled">
            <li>
              <Link to={basePath}>{basePathName}</Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`
              const isLast = index === pathnames.length - 1
              return (
                <li key={to} className={isLast ? 'active' : ''}>
                  {isLast ? (
                    <span>
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </span>
                  ) : (
                    <Link to={to}>
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        {/* /.breadcrumb-inner */}
      </div>
      {/* /.container */}
    </div>
  )
}

export default Breadcumb
