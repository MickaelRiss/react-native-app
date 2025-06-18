import { Slot, Stack } from 'expo-router'
import { useColorScheme } from "react-native"
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'
import { BooksProvider } from '../contexts/BooksContext'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    console.log(colorScheme)
    const theme = Colors[colorScheme] ?? Colors.light
    
    return (
        <UserProvider>
            <BooksProvider>
                <StatusBar value='auto' />
                <Stack screenOptions={{
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: theme.title,
                }}>
                    <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                    <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
                    <Stack.Screen name='index' options={{ title: 'Home', headerShown: false }} />
                </Stack>
            </BooksProvider>
        </UserProvider>
    )
}

export default RootLayout