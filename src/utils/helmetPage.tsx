import React from 'react'
import { Helmet } from 'react-helmet-async'
import { PATHS } from './paths'

interface HelmetConfig {
  path: string
  title: string
}

const helmetConfig: HelmetConfig[] = [
  { path: '/', title: 'Home - Flipmart' },
  { path: '/contact', title: 'Contact - Flipmart' },
  { path: '/about', title: 'About - Flipmart' },
  { path: '/sign-up', title: 'Sign Up - Flipmart' },
  { path: '/wishlist', title: 'Wishlist - Flipmart' },
  { path: '/cart', title: 'Cart - Flipmart' },
  { path: PATHS.SIGNIN, title: 'Login - Flipmart' },
]

export const PageHelmet: React.FC = () => {
  const path = window.location.pathname
  const currentConfig = helmetConfig.find((config) => config.path === path)

  return (
    <Helmet>
      <title>{currentConfig ? currentConfig.title : 'Flipmart'}</title>
    </Helmet>
  )
}
