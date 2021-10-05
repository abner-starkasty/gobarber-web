import { FiLock, FiArrowLeft, FiMail, FiUser } from 'react-icons/fi'
import { Form } from '@unform/web'

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'

const SignUp = () => {
  function handleSubmit(data: any): void {
    console.log(data)
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber Logo" />

        <Form onSubmit={handleSubmit}>
          <h1>Register</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Register</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Back to Login
        </a>
      </Content>
    </Container>
  )
}

export default SignUp
