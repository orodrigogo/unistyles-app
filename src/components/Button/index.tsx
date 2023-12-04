import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { stylesheet } from "./styles"
import { useStyles } from "../../lib/styles"

interface Props extends TouchableOpacityProps {
  title: string
  type?: "base" | "outline"
}

export function Button({ title, type = "base", ...rest }: Props) {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <TouchableOpacity
      style={[styles.container, theme.components.button[type]]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[styles.text, theme.components.buttonText[type]]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
