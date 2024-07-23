import { v4 as uuidv4 } from 'uuid'

interface ICurrencyItem {
  id: string
  title: string
  symbol: string
}

const CurrencyItems: ICurrencyItem[] = [
  {
    id: uuidv4(),
    title: 'USD',
    symbol: '$',
  },
  {
    id: uuidv4(),
    title: 'VND',
    symbol: '₫',
  },
  {
    id: uuidv4(),
    title: 'EUR',
    symbol: '€',
  },
  {
    id: uuidv4(),
    title: 'JPY',
    symbol: '¥',
  },
] as const

export default CurrencyItems
