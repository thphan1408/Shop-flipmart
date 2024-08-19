export interface ICardProps {
  name: string
  path: string
  onClick?: () => void
  star?: number
  image: string
  tag: string
  className?: string
  price: string
  priceDiscount?: string
}

export interface ICardCompProps {
  title?: string
  children: React.ReactNode
}

export interface ICardNewProps {
  name: string
  path: string
  onClick?: () => void
  star?: number
  image: string
  className?: string
  price: string
  priceDiscount?: string
  titleDiscount?: string
}

export interface ICardSpecialProps {
  name: string
  path: string
  image: string
  star?: number
  price: string
  onClick?: () => void
  className?: string
}

export interface ICardTesmonialProps {
  name: string
  companyName: string
  image: string
  description: string
  className?: string
}
