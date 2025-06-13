import { StyleSheet, SafeAreaView, ScrollView, View, KeyboardAvoidingView, Platform } from 'react-native'
import ThemedView from './ThemedView' // si ThemedView gère la couleur de fond en fonction du thème

const Container = ({
  children,
  scrollable = false,
  safe = true,
  style,
  contentContainerStyle,
}) => {
  const Wrapper = scrollable ? ScrollView : View
  const Inner = (
    <Wrapper
      style={[styles.container, style]}
      contentContainerStyle={scrollable ? [styles.contentContainer, contentContainerStyle] : undefined}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </Wrapper>
  )

  return (
    <ThemedView style={styles.flex}>
      {safe ? (
        <SafeAreaView style={styles.flex}>
          <KeyboardAvoidingView
            style={styles.flex}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            {Inner}
          </KeyboardAvoidingView>
        </SafeAreaView>
      ) : (
        Inner
      )}
    </ThemedView>
  )
}

export default Container

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flexGrow: 1,
  },
})