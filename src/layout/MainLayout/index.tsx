import React from 'react'
import { Footer, Header } from '../../components'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
