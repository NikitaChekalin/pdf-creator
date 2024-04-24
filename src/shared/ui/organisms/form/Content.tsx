import { Children } from '@/shared/@types'

export const Content = ({ children }: Children) => (
  <div className='flex flex-col gap-2'>{children}</div>
)
