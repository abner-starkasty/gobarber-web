import React, { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

interface IAuthData {
  token: string
  user: Record<string, unknown>
}

interface ISignInCredentials {
  email: string
  password: string
}

interface IAuthContextData {
  user: Record<string, unknown>
  isSigned: boolean
  signIn: (credentials: ISignInCredentials) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<IAuthData>(() => {
    const token = localStorage.getItem('@GoBarber:token')
    const user = localStorage.getItem('@GoBarber:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as IAuthData
  })
  const [isSigned, setIsSigned] = useState(() => {
    const token = localStorage.getItem('@GoBarber:token')
    const user = localStorage.getItem('@GoBarber:user')

    if (token && user) {
      return true
    }

    return false
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
    setIsSigned(true)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token')
    localStorage.removeItem('@GoBarber:user')

    setAuthData({} as IAuthData)
    setIsSigned(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: authData.user, isSigned, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
