import { IconFileTypePdf } from '@tabler/icons-react'

import { cn } from '@/shared/lib'

export interface Conversion {
  number: number
  date: string
  onActive: () => void
  className?: string
}

export const Conversion = ({ number, date, onActive, className }: Conversion) => {
  return (
    <div
      className={cn(
        'flex items-center p-2  space-x-4 cursor-pointer rounded-2xl transition duration-200 ease-linear transform hover:bg-gray-200',
        className
      )}
      onClick={onActive}
    >
      <IconFileTypePdf size={30} stroke={1} />
      <div className='w-full'>
        <p className='text-gray-600'>№: {number}</p>
        <p className='text-gray-800'>Дата: {date}</p>
      </div>
    </div>
  )
}
