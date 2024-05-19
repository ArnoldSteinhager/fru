import { StyleSheet, Text, View } from "react-native"

export default function TitleFactCard(props) {
  const { children, style } = props
  return (
    <View style={[styles.box, styles.shadow, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    padding: 15,
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 9,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 21,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
})
