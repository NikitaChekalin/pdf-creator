import { IconFileTypePdf } from '@tabler/icons-react'

export interface Conversion {
  number: number
  date: string
  onClick?: () => void
}

export const Conversion = ({ number, date, onClick }: Conversion) => {
  return (
    <div
      className='flex items-center p-2  space-x-4 cursor-pointer rounded-2xl transition duration-200 ease-linear transform hover:bg-gray-200'
      onClick={onClick}
    >
      <IconFileTypePdf size={30} stroke={1} />
      <div className='w-full'>
        <p className='text-gray-600'>Номер: {number}</p>
        <p className='text-gray-800'>Дата: {date}</p>
      </div>
    </div>
  )
}
