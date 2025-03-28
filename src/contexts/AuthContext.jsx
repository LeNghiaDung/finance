"use client"
import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [signupModalOpen, setSignupModalOpen] = useState(false)

  const openLoginModal = () => {
    setLoginModalOpen(true)
    setSignupModalOpen(false)
  }

  const closeLoginModal = () => {
    setLoginModalOpen(false)
  }

  const openSignupModal = () => {
    setSignupModalOpen(true)
    setLoginModalOpen(false)
  }

  const closeSignupModal = () => {
    setSignupModalOpen(false)
  }

  const login = () => {
    setIsLoggedIn(true)
    closeLoginModal()
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  const value = {
    isLoggedIn,
    loginModalOpen,
    signupModalOpen,
    openLoginModal,
    closeLoginModal,
    openSignupModal,
    closeSignupModal,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

