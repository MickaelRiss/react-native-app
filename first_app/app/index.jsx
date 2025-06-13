import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img} />
            <Spacer height={20}/>
            <ThemedText title={true} style={styles.title}>The Number 1</ThemedText>
            <Spacer height={10}/>
            <ThemedText>Reading list App</ThemedText>
            <Spacer height={30}/>
            <ThemedView style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Link href="/about" style={styles.link}>
                    <ThemedText>About page</ThemedText>
                </Link>
                <Link href="/contact" style={styles.link}>
                    <ThemedText>About page</ThemedText>
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