import { PaletteColorOptions } from '@mui/material';
import { ThemeOptions } from '@mui/material/styels';

declare module '@mui/material/styles' {

  interface Theme {
    status: {
      danger: string
    }
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral?: PaletteColor
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }

}