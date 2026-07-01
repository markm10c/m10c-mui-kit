import { ElementType } from 'react';
import { PaletteOptions, Theme } from '@mui/material/styles';
export { Theme } from '@mui/material/styles';

type PrimaryColor = 'indigo' | 'neonBlue';

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
    }
    interface SimplePaletteColorOptions {
        activated?: string;
    }
    interface Palette {
        neutral: PaletteRange;
        shadow: string;
        TableCell: {
            border: string;
        };
    }
    interface PaletteOptions {
        neutral?: PaletteRange;
        shadow?: string;
        TableCell?: {
            border?: string;
        };
    }
    interface TypeBackground {
        level1: string;
        level2: string;
        level3: string;
    }
}

export { type ColorScheme, type Direction, type Mode, type PrimaryColor, type ThemeConfig, createMuiKitTheme };
