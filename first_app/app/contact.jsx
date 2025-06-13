import { StyleSheet } from "react-native";
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Contact = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.title}>Contact Page</ThemedText>
            <Spacer height={16} />  
            <Link href={'/'} style={styles.link}>
                <ThemedText>Back Home</ThemedText>
            </Link>
        </ThemedView>   
    )
}

export default Contact 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})