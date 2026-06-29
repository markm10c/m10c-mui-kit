import { ElementType } from 'react';
import { PaletteOptions, Theme } from '@mui/material/styles';
export { Theme } from '@mui/material/styles';

type PrimaryColor =
  | 'chateauGreen'
  | 'indigo'
  | 'neonBlue'
  | 'royalBlue'
  | 'tomatoOrange';

type Direction = 'ltr' | 'rtl';

type ColorScheme = 'dark' | 'light';

type Mode = 'dark' | 'light' | 'system';

interface ThemeConfig {
    primaryColor: PrimaryColor;
    direction?: Direction;
    linkComponent?: ElementType;
    paletteOverrides?: {
        light?: PaletteOptions;
        dark?: PaletteOptions;
    };
}
declare function createMuiKitTheme(config: ThemeConfig): Theme;

declare module '@mui/material/Chip/Chip' {
    interface ChipPropsVariantOverrides {
        soft: true;
    }
}
declare module '@mui/material/Chip/chipClasses' {
    interface ChipClasses {
        soft: string;
        softPrimary: string;
        softSecondary: string;
        softSuccess: string;
        softInfo: string;
        softWarning: string;
        softError: string;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface PaletteRange {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    }
    interface PaletteColor {
        activated: string;
        hovered: string;
        selected: string;
    }
    interface SimplePaletteColorOptions {
        activated?: string;
        hovered?: string;
        selected?: string;
    }
    interface Palette {
        neutral: PaletteRange;
        shadow: string;
        Avatar: {
            defaultBg: string;
        };
        Backdrop: {
            bg: string;
        };
        OutlinedInput: {
            border: string;
        };
        TableCell: {
            border: string;
        };
        Tooltip: {
            bg: string;
        };
    }
    interface PaletteOptions {
        neutral?: PaletteRange;
        shadow?: string;
        Avatar?: {
            defaultBg?: string;
        };
        Backdrop?: {
            bg?: string;
        };
        OutlinedInput?: {
            border?: string;
        };
        TableCell?: {
            border?: string;
        };
        Tooltip?: {
            bg?: string;
        };
    }
    interface TypeBackground {
        level1: string;
        level2: string;
        level3: string;
    }
}

export { type ColorScheme, type Direction, type Mode, type PrimaryColor, type ThemeConfig, createMuiKitTheme };
