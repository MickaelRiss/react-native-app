import { StyleSheet, Text } from "react-native";
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'


const Login = () => {
    const handleSubmit = () => {
        console.log('Login form submitted')
    }

    return (
        <ThemedView style={styles.container} safe={true}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>
            
            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2', textAlign: 'center' }}>Login</Text>
            </ThemedButton>

            <Spacer height={100}/>
            
            <Link href='/register'>
                <ThemedText style={{ textAlign: 'center' }}>
                    Register instead
                </ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
})