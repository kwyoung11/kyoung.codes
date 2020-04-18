import 'styled-components';

declare module 'styled-components' {
  import { theme } from './src/themes/primaryTheme';

  export interface DefaultTheme extends ThemeInterface {
    colors: typeof theme.colors;
    fonts: typeof theme.fonts;
  }
}
