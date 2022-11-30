import React, { createContext, useEffect, useState } from 'react'
import { getProfile } from '../../services/rest'
import { getFromSessionStorage } from '../../services/storage'

export const AuthContext = createContext({})

export default function AuthProvider({ children }: any) {

    const [user, setUser] = useState(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)
    const [isAuthenticated, userHasAuthenticated] = useState<boolean | null>(false)



    const onLoad = async () => {
        let response = await getFromSessionStorage('authenticated')
        console.log(response)
        if (response !== null && response !== undefined) {
            let userData = await getFromSessionStorage('user_id')
            if (userData === null || userData === undefined) {
                let params = {
                    user_id: userData
                }
                let resp = await getProfile({ params })
                let success = await resp.success

                if (success === true) {
                    let data = resp.data
                    setUser(data)
                    setIsAuthenticating(false)
                    userHasAuthenticated(true)
                }
            }
        }
        else {
            setUser(null)
            setIsAuthenticating(false)
            userHasAuthenticated(false)
        }
        setIsAuthenticating(false)
    }

    useEffect(() => {
        onLoad()
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isAuthenticated,
            isAuthenticating,
            userHasAuthenticated,
            setIsAuthenticating,
            logout: () => {
                setIsAuthenticating(true)
                window.sessionStorage.clear();
                setUser(null);
                userHasAuthenticated(false);
                setIsAuthenticating(false);
            }
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
