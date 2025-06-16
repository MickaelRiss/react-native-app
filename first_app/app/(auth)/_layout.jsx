import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '../../hooks/useUser'

const RootLayout = () => { 
    const { user } = useUser()
    console.log('User depuis auth:', user)
    console.log('boudin')
    
    return (
        <>
            <StatusBar value='auto' />
            <Stack screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
                <Stack.Screen name='login' options={{ title: 'Login' }} />
                <Stack.Screen name='register' options={{ title: 'Register' }} />
            </Stack>
        </>
    )
}

export default RootLayout