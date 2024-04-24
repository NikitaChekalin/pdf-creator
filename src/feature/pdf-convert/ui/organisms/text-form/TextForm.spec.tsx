import { fireEvent, render, waitFor } from '@testing-library/react'

import { TextForm } from './TextForm'

describe('Text to PDF conversion process', () => {
  test('Submitting text form converts text to PDF', async () => {
    const onSaveHistoryConversion = jest.fn()

    const { getByPlaceholderText, getByRole } = render(
      <TextForm onSaveHistoryConversion={onSaveHistoryConversion} />
    )

    const textInput = getByPlaceholderText('Введіть текст')
    const submitButton = getByRole('button', { name: 'Конвертувати в PDF' })

    fireEvent.change(textInput, { target: { value: 'Some test text' } })

    fireEvent.click(submitButton)

    await waitFor(() => expect(onSaveHistoryConversion).toHaveBeenCalled())

    expect(onSaveHistoryConversion).toHaveBeenCalledWith(
      expect.objectContaining({
        base64: expect.any(String),
        date: expect.any(String)
      })
    )
  })
})
