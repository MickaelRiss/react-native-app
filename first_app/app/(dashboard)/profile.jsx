import { StyleSheet, useColorScheme, Pressable } from "react-native"
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import { Colors } from "../../constants/Colors"

const Profile = () => {
    const { logout, user } = useUser()
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] && Colors.light
    
    const handlePressed = () => {
        logout()
    }

    return (
        <ThemedView style={styles.container} safe={true}>
            <Spacer />

            <Pressable 
                style={({pressed}) => [
                    styles.btn,
                    { borderColor: theme.borderColorButton, shadowColor: theme.text, alignSelf: 'flex-end' }, 
                    pressed && styles.pressed
                ]}
                onPress={handlePressed}
            >
                <ThemedText>
                    Logout
                </ThemedText>
            </Pressable>

            <Spacer height="50"/>
            <ThemedText title={true} style={styles.heading}>
                Your Profile
            </ThemedText>
            <Spacer />

            <ThemedView style={{ flexDirection: 'row', gap: 10 }}>
                <ThemedText title={true} style={{ fontWeight: 'bold'}}>Email:</ThemedText>
                <ThemedText>{user.email}</ThemedText>
            </ThemedView>
            
            <Spacer height={80}/>
            <ThemedText>Time to start reading some books...</ThemedText>
            <Spacer />
        </ThemedView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    shadow: {
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    pressed: {
        opacity: 0.6,
        transform: [{ scale: 0.98 }],
    },
    btn: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 6,
    }
})