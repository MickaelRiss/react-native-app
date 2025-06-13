import { StyleSheet, useColorScheme } from "react-native"
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const About = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <ThemedView 
            style={[styles.container, { backgroundColor: theme.background }]}

        >
            <ThemedText title={true} style={styles.title}>About Page</ThemedText>
            <Spacer height={16} />
            <Link 
                href={'/'} 
                style={[
                    styles.link, 
                    { 
                        color: theme.title,
                        borderColor: theme.title 
                    }
                ]}
            >
                <ThemedText>Back Home</ThemedText>
            </Link>
        </ThemedView>    
    )
}

export default About

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