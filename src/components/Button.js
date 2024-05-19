import { Pressable, StyleSheet, Text } from "react-native"

export default function Button(props) {
  const { onPressOut, title, style } = props

  return (
    <Pressable
      onPressOut={onPressOut}
      style={[styles.box, styles.shadow, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 9,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: 0.25,
    color: "black",
  },
})
