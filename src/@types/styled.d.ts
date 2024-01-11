import 'styled-components'
import { defaultTheme } from '../styles/themes/default.ts'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme from TS with our ThemeType.
}
