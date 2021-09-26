import React, { useState, createContext } from 'react'

const AuthContext = createContext()

const REFRESH_TOKEN = 'refreshToken'
const USER = 'user'

const getInitialState = () => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN)
  const user = localStorage.getItem(USER)

  return { refreshToken, user: user ? JSON.parse(user) : user }
}

function AuthProvider({ children }) {
  const initialState = getInitialState()
  const [refreshToken, setRefreshToken] = useState(initialState.refreshToken)
  const [user, setUser] = useState(initialState.user)

  console.log('userAuth', user)

  function login(token, userData) {
    setRefreshToken(token)
    setUser(userData)
    localStorage.setItem(REFRESH_TOKEN, token)
    localStorage.setItem(USER, JSON.stringify(userData))
  }

  function logout() {
    setRefreshToken(null)
    setUser(null)
    localStorage.removeItem(REFRESH_TOKEN)
    localStorage.removeItem(USER)
  }

  return (
    <AuthContext.Provider
      value={{
        refreshToken,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
