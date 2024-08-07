import { v4 as uuidv4 } from 'uuid'

interface ICurrencyItem {
  id: string
  title: string
  symbol: string
}

interface ILanguageItem {
  id: string
  title: string
  path: string
}

interface IMainItem {
  Currencies: {
    items: ICurrencyItem[] // USD, VND, EUR, JPY
  }
  Languages: {
    items: ILanguageItem[] // English, French, German, Vietnamese
  }
}

const CurrencyAndLanguageItems: IMainItem = {
  Currencies: {
    items: [
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
    ],
  },
  Languages: {
    items: [
      {
        id: uuidv4(),
        title: 'English',
        path: 'en',
      },
      {
        id: uuidv4(),
        title: 'French',
        path: 'fr',
      },
      {
        id: uuidv4(),
        title: 'German',
        path: 'de',
      },
      {
        id: uuidv4(),
        title: 'Vietnamese',
        path: 'vn',
      },
    ],
  },
} as const

export default CurrencyAndLanguageItems
