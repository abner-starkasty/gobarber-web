import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

interface IAuthData {
  token: string
  user: Record<string, unknown>
}

interface ISignInCredentials {
  email: string
  password: string
}

interface IAuthContext {
  user: Record<string, unknown>
  signIn: (credentials: ISignInCredentials) => Promise<void>
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<IAuthData>(() => {
    const token = localStorage.getItem('@GoBarber:token')
    const user = localStorage.getItem('@GoBarber:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as IAuthData
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<any>('sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    localStorage.setItem('@GoBarber:token', token)
    localStorage.setItem('@GoBarber:user', JSON.stringify(user))

    setAuthData({ token, user })
  }, [])

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
