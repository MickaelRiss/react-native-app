import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img} />

            <Text style={styles.title}>Home</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading list App</Text>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Link href="/about" style={styles.link}>About page</Link>
                <Link href="/contact" style={styles.link}>Contact page</Link>
            </View>
        </View>
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
    img: {
        marginVertical: 20,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})