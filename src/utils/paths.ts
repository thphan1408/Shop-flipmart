export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '/not-found',
  SIGN_UP: '/sign-up',
  WISHTLIST: '/wishlist',
  CART: '/cart',
  SIGNIN: '/sign-in',
  MY_ACCOUNT: '/my-account',
  CHECKOUT: '/checkout',
}

export type PATH = (typeof PATHS)[keyof typeof PATHS]
