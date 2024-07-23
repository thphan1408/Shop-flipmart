import { v4 as uuidv4 } from 'uuid'

interface ILanguageItem {
  id: string
  title: string
  path: string
}
const LanguageItems: ILanguageItem[] = [
  {
    id: uuidv4(),
    title: 'English',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'French',
    path: '#',
  },
  {
    id: uuidv4(),
    title: 'German',
    path: '#',
  },
] as const

export default LanguageItems
