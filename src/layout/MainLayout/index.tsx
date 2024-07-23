import React from 'react'
import { Breadcumb, Footer, Header } from '../../components'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Breadcumb basePathName="Home" basePath="/" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
