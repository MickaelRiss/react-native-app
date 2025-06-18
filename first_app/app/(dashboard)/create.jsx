import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { useBooks } from '../../hooks/useBooks'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedTextInput from "../../components/ThemedTextInput"
import ThemedButton from "../../components/ThemedButton"

const Create = () => {
    const { createBook } = useBooks()
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        if (!title.trim() || !author.trim() || !description.trim()) return
        
        setError(null)
        
        setLoading(true)

        await createBook({ title, author, description })

        if (error) {
            setError(error.message)
        }

        // reset values and redirect
        setTitle('')
        setAuthor('')
        setDescription('')
        router.replace('/books')
        setLoading(false)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <ThemedView style={styles.container} safe={true}>
                <Spacer />
                <ThemedText title={true} style={styles.heading}>
                    Add a New Book
                </ThemedText>
                <Spacer />
                
                <ThemedTextInput 
                    placeholder = 'Title'
                    style= {styles.input}
                    onChangeText={setTitle}
                    value={title}
                />
                <Spacer height={20} />
                <ThemedTextInput 
                    placeholder = 'Author'
                    style= {styles.input}
                    onChangeText={setAuthor}
                    value={author}
                />
                <Spacer height={20} />
                <ThemedTextInput 
                    placeholder = 'Description'
                    style= {styles.multiline}
                    onChangeText={setDescription}
                    value={description}
                    multiline={true}
                />
                <Spacer height={30} />
                <ThemedButton onPress={handleSubmit} width="25%" style={{ alignSelf: 'center' }} disabled={loading}>
                    <ThemedText style={{ color: '#f2f2f2', textAlign: 'center' }}>
                        { loading ? 'Saving...' : 'Add Book' }
                    </ThemedText>
                </ThemedButton>
                
                <Spacer height={50}/>
                
                {error && <Text style={styles.error}>{error}</Text>}
            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
        marginHorizontal: 40, 
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    }
})