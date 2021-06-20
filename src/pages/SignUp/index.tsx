import { FiLock, FiArrowLeft, FiMail, FiUser } from 'react-icons/fi'

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'

const SignUp = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber Logo" />

        <form>
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
        </form>

        <a href="login">
          <FiArrowLeft />
          Back to Login
        </a>
      </Content>
    </Container>
  )
}

export default SignUp
