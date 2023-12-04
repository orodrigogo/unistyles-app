import { UnistylesTheme } from "react-native-unistyles"
import { StatusBar } from "expo-status-bar"

import { theme } from "./src/lib/theme"
import { Home } from "./src/screens/Home"

export default function App() {
  return (
    <UnistylesTheme theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </UnistylesTheme>
  )
}
