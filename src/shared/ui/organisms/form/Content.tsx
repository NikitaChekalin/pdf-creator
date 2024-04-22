import { ReactNode } from 'react'

export interface Content<T = ReactNode> {
  children: T
}

export const Content = ({ children }: Content) => (
  <div className='flex flex-col gap-2'>{children}</div>
)
