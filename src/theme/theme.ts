export {};

// MUI module augmentation for the kit's custom palette tokens. Imported for its
// side effects by both the theme entry (index.ts) and components/index.ts so
// consumers of either bundle pick up the augmented types.
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

  // Soft-tint background derived from each color's main channel; consumed by
  // SeverityPill and available for consumer overrides.
  interface PaletteColor {
    activated: string;
  }

  interface SimplePaletteColorOptions {
    activated?: string;
  }

  interface Palette {
    neutral: PaletteRange;
    shadow: string;
    TableCell: { border: string };
  }

  interface PaletteOptions {
    neutral?: PaletteRange;
    shadow?: string;
    TableCell?: { border?: string };
  }

  interface TypeBackground {
    level1: string;
    level2: string;
    level3: string;
  }
}
