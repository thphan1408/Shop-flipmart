import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface BreadcumbProps {
  basePathName: string
  basePath: string
  className?: string
}

const Breadcumb: React.FC<BreadcumbProps> = ({
  basePathName,
  basePath,
  className,
}) => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter((segment) => segment)

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`
    const isLast = index === pathSegments.length - 1
    return (
      <li key={index} className={isLast ? 'active' : ''}>
        {isLast ? <span>{segment}</span> : <Link to={path}>{segment}</Link>}
      </li>
    )
  })
  return (
    <div className={`breadcrumb" ${className || ''}`}>
      <div className="Container">
        <div className="breadcrumb-inner">
          <ul className="list-inline list-unstyled">
            <li>
              <Link to={basePath} />
              {basePathName}
            </li>
            {breadcrumbItems}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Breadcumb
