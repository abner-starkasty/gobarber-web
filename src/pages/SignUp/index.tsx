import { useCallback, useRef } from 'react'
import { FiLock, FiArrowLeft, FiMail, FiUser } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'
import getValidationErrors from '../../utils/getValidationErrors'

const SignUp = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (err) {
      const errors = getValidationErrors(err as any)

      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
