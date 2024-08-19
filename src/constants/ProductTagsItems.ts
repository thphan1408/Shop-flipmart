import { v4 as uuidv4 } from 'uuid'

interface IProductTagsItems {
  id: string
  title: string
  path: string
}

export const ProductTagsItems: IProductTagsItems[] = [
  {
    id: uuidv4(),
    title: 'Phone',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'Vest',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'Smartphone',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'Furniture',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'T-shirt',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'Sweatpants',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'Sneaker',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'Toys',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'Rose',
    path: '#',
  },
]
