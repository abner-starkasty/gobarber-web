import { IToastMessage } from '../../hooks/toast'

import Toast from './Toast'

import { Container } from './styles'

interface ToastContainerProps {
  messages: IToastMessage[]
}

const ToastContainer = ({ messages }: ToastContainerProps) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  )
}

export default ToastContainer
