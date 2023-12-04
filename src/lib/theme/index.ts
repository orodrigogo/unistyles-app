import { colors } from "./colors"
import { fontSize } from "./fontSize"
import { components } from "./components"
import { breakpoints } from "./breakpoints"

export const theme = {
  colors,
  fontSize,
  components,
  breakpoints,
} as const // Para o TypeScript saber que é um objeto constante e não mutável.
