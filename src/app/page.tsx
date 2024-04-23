'use client'

import { History, PDFCreate } from '@/feature'
import { Container } from '@/shared/ui'
import { Pdf } from '@/widgets'

const Home = () => {
  return (
    <Container title='PDF Creator'>
      <Pdf />
    </Container>
  )
}

export default Home
