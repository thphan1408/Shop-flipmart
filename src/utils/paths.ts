export const PATHS = {
  ROOT: '/',
  HOME: '/',
  ABOUT: '/About',
  CONTACT: '/Contact',
  NOT_FOUND: '/Not-found',
  SIGN_UP: '/Sign-up',
  WISHTLIST: '/Wishlist',
  CART: '/Cart',
  SIGNIN: '/Login',
  MY_ACCOUNT: '/My-account',
  CHECKOUT: '/Checkout',
}

export type PATH = (typeof PATHS)[keyof typeof PATHS]
