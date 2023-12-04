import { createStyleSheet } from "../../lib/styles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: "100%",
    height: 56,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
  },
}))
