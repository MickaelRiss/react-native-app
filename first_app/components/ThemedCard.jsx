import { View, StyleSheet, useColorScheme } from 'react-native'
import { Color } from '../constants/Colors'

const ThemedCard = () => {
    const colorScheme = useColorScheme()
    const theme = Color[colorScheme] ?? Color.light
    return (
        <View
        
        />
    )
}

export default ThemedCard

const styles = StyleSheet.create({

})