'use client'

import { Controller } from 'react-hook-form'

import { HistoryFile } from '@/shared/@types'
import { Button, Form, Textarea } from '@/shared/ui'

import { useTextForm } from './hook'

interface TextForm {
  onSaveHistoryConversion: (file: HistoryFile) => void
}

export const TextForm = ({ onSaveHistoryConversion }: TextForm) => {
  const { handleSubmit, control, errors, onSubmit } = useTextForm({
    onSaveHistoryConversion
  })

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Content>
        <Controller
          name='text'
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder='Артем Шевченко Валерійович'
              error={errors.text?.message}
            />
          )}
        />

        <Button type='submit' title='Конвертувати в PDF' className='self-end' />
      </Form.Content>
    </Form.Root>
  )
}
