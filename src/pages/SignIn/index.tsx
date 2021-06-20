import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'

const SignIn = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber Logo" />

        <form>
          <h1>Login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Enter</Button>

          <a href="forgot">Forgot My Password</a>
        </form>

        <a href="login">
          <FiLogIn />
          Create Account
        </a>
      </Content>

      <Background />
    </Container>
  )
}

export default SignIn
