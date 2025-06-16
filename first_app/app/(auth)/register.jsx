import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, register } = useUser()

    const handleSubmit = async() => {
        try {
            console.log('Register form submitted')
            await register(email, password)
            console.log('Current user is: ', user)
        } catch(error) {
            console.log(error.message)
        }

    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <ThemedView style={styles.container} safe={true}>
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Register to your account
                </ThemedText>

                <ThemedTextInput 
                    placeholder = 'Email'
                    style= {{ 
                        width: '80%',
                        marginBottom: 20,
                    }}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />
                <ThemedTextInput 
                    placeholder = 'Password'
                    style={{
                        width: '80%',
                        marginBottom: 30,
                    }}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <ThemedButton onPress={handleSubmit} width="25%">
                    <Text style={{ color: '#f2f2f2', textAlign: 'center' }}>Register</Text>
                </ThemedButton>
                
                <Spacer height={100}/>
                
                <Link href='/login'>
                    <ThemedText style={{ textAlign: 'center' }}>
                        Login instead
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>    
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
})