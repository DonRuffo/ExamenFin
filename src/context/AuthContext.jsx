import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, settAuth] = useState({})
    const [modalEst, setModalEst] = useState(false)
    const [modalMatri, setModalMatri] = useState(false)
    const [modalMate, setModalMate] = useState(false)
    return (
        <AuthContext.Provider
            value={
                {
                    auth,
                    settAuth,
                    modalEst,
                    setModalEst,
                    modalMatri,
                    setModalMatri,
                    modalMate,
                    setModalMate
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext