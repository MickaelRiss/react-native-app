import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import Constants from 'expo-constants'

const Home = () => {
    return (
        <ThemedView style={styles.container} safe={true}>
            <Spacer />
            <ThemedLogo style={styles.img} />
            <Spacer height={20}/>
            <ThemedText title={true} style={styles.title}>The Number 1</ThemedText>
            <Spacer height={10}/>
            <ThemedText>Reading list App</ThemedText>
            <Spacer height={30}/>
            <ThemedView style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link href="/login" style={styles.link}>
                    <ThemedText>Login page</ThemedText>
                </Link>
                <Link href="/register" style={styles.link}>
                    <ThemedText>Register page</ThemedText>
                </Link>
                <Link href="/profile" style={styles.link}>
                    <ThemedText>Profile page</ThemedText>
                </Link>
                <Link href="/create" style={styles.link}>
                    <ThemedText>Create page</ThemedText>
                </Link>
                <Link href="/books" style={styles.link}>
                    <ThemedText>Books page</ThemedText>
                </Link>
            </ThemedView>
        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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