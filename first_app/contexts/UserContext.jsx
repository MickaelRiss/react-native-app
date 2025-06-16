import { createContext, useEffect, useState } from "react"
import { account } from '../lib/appwrite'
import { ID } from 'react-native-appwrite'
import { useRouter } from "expo-router"

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)
    const router = useRouter()

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
            router.replace('/profile')
        } catch(error) {
            throw Error(error.message)
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
            router.replace('/profile')
        } catch(error) {
            throw Error(error.message)
        }
    }

    async function logout() {
        await account.deleteSession('current')
        setUser(null)
        router.replace('/login')
    }

    async function getInitialUserValue() {
        try {
            const response = await account.get()
            setUser(response)
        } catch (error) {
            setUser(null)
        } finally {
            setAuthChecked(true)
        }
    }

    useEffect(() => {
        getInitialUserValue()
    }, [])

    return (
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
            { children }
        </UserContext.Provider> 
    )
}
