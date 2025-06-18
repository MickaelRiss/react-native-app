import { Pressable, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedButton = ({ width = '20%', style, ...props }) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.btn,
        { width: width }, 
        pressed &&  styles.pressed,
        style
      ]}
      { ...props }
    />  
  ) 
}

export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8
  }
})