import { IconHistory } from '@tabler/icons-react'

import { History as HistoryConversions } from '@/shared/@types'

import { Conversion } from '../molecules'

interface HistoryProps {
  historyConversion: HistoryConversions | []
}

export const History = ({ historyConversion }: HistoryProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <IconHistory size={20} color='#4b5563' />
        <h2 className='text-xl font-semibold text-gray-600'>Історія конвертацій</h2>
      </div>
      {!!historyConversion.length && (
        <div className='flex flex-col gap-2'>
          {historyConversion.map((conversion) => (
            <Conversion key={conversion.date} {...conversion} />
          ))}
        </div>
      )}
    </div>
  )
}
