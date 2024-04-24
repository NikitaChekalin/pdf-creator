import { IconHistory } from '@tabler/icons-react'

import { HistoryConversion } from '@/shared/@types'
import { cn } from '@/shared/lib'

import { useHistoryStore } from '../../slice'
import { Conversion } from '../molecules'

export const History = () => {
  const { historyConversions, setActiveHistoryItem, activeHistoryItem } = useHistoryStore()

  const onSetActiveHistoryConversion = (conversion: HistoryConversion) =>
    setActiveHistoryItem(conversion)
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <IconHistory size={20} color='#4b5563' />
        <h2 className='text-xl font-semibold text-gray-600'>Історія конвертацій</h2>
      </div>
      {!!historyConversions.length && (
        <div className='flex flex-col gap-2'>
          {historyConversions.map((conversion, index) => {
            const isActive = activeHistoryItem && activeHistoryItem?.number - 1 === index

            return (
              <Conversion
                {...conversion}
                key={conversion.date}
                className={cn({ 'border border-green-500': isActive })}
                onActive={onSetActiveHistoryConversion.bind(null, conversion)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
