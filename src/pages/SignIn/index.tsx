import { useCallback, useContext, useRef } from 'react'
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Input from '../../components/Input'
import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'
import { useAuth } from '../../hooks/AuthContext'

interface SignInFormData {
  email: string
  password: string
}

const SignIn = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        signIn({
          email: data.email,
          password: data.password,
        })
      } catch (err) {
        const errors = getValidationErrors(err as any)

        formRef.current?.setErrors(errors)
      }
    },
    [signIn],
  )

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

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
