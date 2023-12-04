import { createStyleSheet } from "../../lib/styles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
}))
