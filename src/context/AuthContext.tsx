import React, { createContext, useCallback } from 'react'
import api from '../services/api'

interface SignInCredentials {
  email: string
  password: string
}

interface IAuthContext {
  name: string
  signIn: (credentials: SignInCredentials) => Promise<void>
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await api.post('sessions', {
      email,
      password,
    })

    console.log(data)
  }, [])

  return (
    <AuthContext.Provider value={{ name: 'Abner', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
