import { createStyleSheet } from "../../lib/styles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: "100%",
    height: {
      xs: 184,
      sm: 184,
      md: 284
    },
    alignItems: "center",
    backgroundColor: {
      ':w[200,500]': theme.colors.primary,
      ':w[500,900]': theme.colors.shape,
    },
  },
  img: {
    height: {
      xs: 232,
      sm: 232,
      md: 332
    },
    width: {
      xs: 140,
      sm: 140,
      md: 240
    }
  },
  content: {
    flex: 1,
    marginTop: 72,
    padding: 32,
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
