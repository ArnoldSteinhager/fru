import { useTranslation } from "react-i18next"
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import "./locales/config/i18next.js"
import TitleFactCard from "./src/components/TitleFactCard"
import Button from "./src/components/Button.js"

export default function App() {
  const { t } = useTranslation()

  return (
    <SafeAreaView style={styles.safeBox}>
      <View style={styles.box}>
        <View style={[styles.container, { flex: 3, alignItems: "stretch" }]}>
          <TitleFactCard>
            sdasdasdasasdasdasdasdasdasdasdasdasdasdd
          </TitleFactCard>
        </View>
        <View style={[styles.container, { flex: 1, alignItems: "center" }]}>
          <Button
            style={{ width: "60%" }}
            title={`${t("draw-a-fact")}`}
            onPressOut={() => console.log("losuję...")}
          />
        </View>
        <View style={[styles.container, { flex: 2 }]}>
          <Text>tu bedzie obrazek</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeBox: {
    flex: 1,
    backgroundColor: "#ffa",
  },
  box: {
    flex: 1,
    rowGap: 10,
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    backgroundColor: "#ffa",
  },
  container: {
    justifyContent: "center",
    borderColor: "green",
    borderWidth: 1,
  },
})
