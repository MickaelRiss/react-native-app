import { createContext, useState } from "react"
import { databases } from '../lib/appwrite'
import { useUser } from '../hooks/useUser' 
import Constants from 'expo-constants'
import { ID, Permission, Role } from "react-native-appwrite"

const DATABASE_ID = Constants.expoConfig.extra.DATABASE 
const COLLECTION_ID = Constants.expoConfig.extra.COLLECTION

export const BooksContext = createContext()

export function BooksProvider ({ children }) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBooks() {
        try {
            
        } catch (error) {
            console.error(error.message)
        }
    }

    async function fetchBookById(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id },
                // Donne la permission de pouvoir lire les informations pour ce user
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            )
        } catch (error) {
            console.error(error.message)
        }
    }

    async function deleteBook(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
            { children }
        </BooksContext.Provider>
    )
}
