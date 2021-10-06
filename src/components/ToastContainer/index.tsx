import { useTransition } from 'react-spring'

import { IToastMessage } from '../../hooks/toast'
import Toast from './Toast'

import { Container } from './styles'

interface ToastContainerProps {
  messages: IToastMessage[]
}

const ToastContainer = ({ messages }: ToastContainerProps) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: message => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 1 },
  })

  return (
    <Container>
      {messagesWithTransitions((style, item, _, key) => (
        <Toast key={key} message={item} style={style} />
      ))}
    </Container>
  )
}

export default ToastContainer
