import { createStyleSheet } from "../../lib/styles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: "100%",
    height: 184,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  img: {
    height: 250,
  },
  content: {
    flex: 1,
    marginTop: 72,
    padding: 24,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: theme.colors.primary,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: "700",
  },
  description: {
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    marginTop: 8,
  },
  product: {
    color: theme.colors.primary,
  },
  rating: {
    marginTop: 42,
    flex: 1,
  },
}))
