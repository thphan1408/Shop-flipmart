import { v4 as uuidv4 } from 'uuid'
import { images } from '../utils/images'

interface ITesmonialItems {
  id: string
  name: string
  companyName: string
  image: string
  description: string
}

export const TesmonialItems: ITesmonialItems[] = [
  {
    id: uuidv4(),
    name: 'John Doe',
    companyName: 'Abc Company',
    image: images.product1,
    description: `" Vtae sodales aliq uam morbi non sem lacus port mollis.
            Nunc condime tum metus eud molest sed consectetuer."`,
  },
  {
    id: uuidv4(),
    name: 'Stephen Doe',
    companyName: 'Xperia Company',
    image: images.product1,
    description: `" Vtae sodales aliq uam morbi non sem lacus port mollis.
            Nunc condime tum metus eud molest sed consectetuer."`,
  },
  {
    id: uuidv4(),
    name: 'Sahara Smith',
    companyName: 'Datsun & Co',
    image: images.product1,
    description:
      '" Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer." ',
  },
]
