import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../../components/auth/GuestOnly'

const RootLayout = () => { 
    const { user } = useUser()

    return (
        <GuestOnly>
            <StatusBar value='auto' />
            <Stack screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
                <Stack.Screen name='login' options={{ title: 'Login' }} />
                <Stack.Screen name='register' options={{ title: 'Register' }} />
            </Stack>
        </GuestOnly>
    )
}

export default RootLayout