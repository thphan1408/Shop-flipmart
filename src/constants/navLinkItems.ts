import { v4 as uuidv4 } from 'uuid'
import { PATHS } from '../utils/paths'

interface INavLinkItem {
  id: string
  title: string
  icon: string
  path: string
}

const NavLinkItems: INavLinkItem[] = [
  {
    id: uuidv4(),
    title: 'My Account',
    icon: 'icon fa fa-user',
    path: PATHS.MY_ACCOUNT,
  },
  {
    id: uuidv4(),
    title: 'Wishlist',
    icon: 'icon fa fa-heart',
    path: PATHS.WISHTLIST,
  },
  {
    id: uuidv4(),
    title: 'My Cart',
    icon: 'icon fa fa-shopping-cart',
    path: PATHS.CART,
  },
  {
    id: uuidv4(),
    title: 'Checkout',
    icon: 'icon fa fa-check',
    path: PATHS.CHECKOUT,
  },
  {
    id: uuidv4(),
    title: 'Login',
    icon: 'icon fa fa-lock',
    path: PATHS.SIGNIN,
  },
] as const

export default NavLinkItems
