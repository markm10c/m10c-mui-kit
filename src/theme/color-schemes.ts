import type { ColorSystemOptions, PaletteColorOptions } from '@mui/material/styles';

import {
  california,
  indigo,
  kepple,
  neonBlue,
  nevada,
  redOrange,
  shakespeare,
  stormGrey,
} from './colors';
import type { ColorScheme, PrimaryColor } from './types';

// Each selectable primary is a ramp plus the light/dark/contrast picks derived
// from it. Adding a primary is a one-line entry here; the ramps live in colors.
const primaryRamps: Record<PrimaryColor, typeof indigo> = {
  indigo,
  neonBlue,
};

// Soft-tint background for a palette color, from its main channel + the
// theme's activated-opacity action token.
function activatedTint(color: string): string {
  return `rgba(var(--mui-palette-${color}-mainChannel) / var(--mui-palette-action-activatedOpacity))`;
}

function primaryColorScheme(
  ramp: typeof indigo,
  scheme: ColorScheme,
): PaletteColorOptions {
  return scheme === 'dark'
    ? { ...ramp, light: ramp[300], main: ramp[400], dark: ramp[500], contrastText: 'var(--mui-palette-common-white)', activated: activatedTint('primary') }
    : { ...ramp, light: ramp[400], main: ramp[500], dark: ramp[600], contrastText: 'var(--mui-palette-common-white)', activated: activatedTint('primary') };
}

interface Config {
  primaryColor: PrimaryColor;
}

export function colorSchemes(config: Config): Partial<Record<ColorScheme, ColorSystemOptions>> {
  const ramp = primaryRamps[config.primaryColor] ?? neonBlue;

  return {
    dark: {
      palette: {
        action: { disabledBackground: 'rgba(0, 0, 0, 0.12)' },
        background: {
          default: 'var(--mui-palette-neutral-950)',
          defaultChannel: '9 10 11',
          paper: 'var(--mui-palette-neutral-900)',
          paperChannel: '18 21 23',
          level1: 'var(--mui-palette-neutral-800)',
          level2: 'var(--mui-palette-neutral-700)',
          level3: 'var(--mui-palette-neutral-600)',
        },
        common: { black: '#000000', white: '#ffffff' },
        divider: 'var(--mui-palette-neutral-700)',
        dividerChannel: '50 56 62',
        error: { ...redOrange, light: redOrange[300], main: redOrange[400], dark: redOrange[500], contrastText: 'var(--mui-palette-common-black)', activated: activatedTint('error') },
        info: { ...shakespeare, light: shakespeare[300], main: shakespeare[400], dark: shakespeare[500], contrastText: 'var(--mui-palette-common-black)', activated: activatedTint('info') },
        neutral: { ...nevada },
        primary: primaryColorScheme(ramp, 'dark'),
        secondary: { ...nevada, light: nevada[100], main: nevada[200], dark: nevada[300], contrastText: 'var(--mui-palette-common-black)', activated: activatedTint('secondary') },
        success: { ...kepple, light: kepple[300], main: kepple[400], dark: kepple[500], contrastText: 'var(--mui-palette-common-black)', activated: activatedTint('success') },
        text: {
          primary: 'var(--mui-palette-neutral-100)',
          primaryChannel: '240 244 248',
          secondary: 'var(--mui-palette-neutral-400)',
          secondaryChannel: '159 166 173',
          disabled: 'var(--mui-palette-neutral-600)',
        },
        warning: { ...california, light: california[300], main: california[400], dark: california[500], contrastText: 'var(--mui-palette-common-black)', activated: activatedTint('warning') },
        shadow: 'rgba(0, 0, 0, 0.5)',
        TableCell: { border: 'var(--mui-palette-divider)' },
      },
    },
    light: {
      palette: {
        action: { disabledBackground: 'rgba(0, 0, 0, 0.06)' },
        background: {
          default: 'var(--mui-palette-common-white)',
          defaultChannel: '255 255 255',
          paper: 'var(--mui-palette-common-white)',
          paperChannel: '255 255 255',
          level1: 'var(--mui-palette-neutral-50)',
          level2: 'var(--mui-palette-neutral-100)',
          level3: 'var(--mui-palette-neutral-200)',
        },
        common: { black: '#000000', white: '#ffffff' },
        divider: 'var(--mui-palette-neutral-200)',
        dividerChannel: '220 223 228',
        error: { ...redOrange, light: redOrange[400], main: redOrange[500], dark: redOrange[600], contrastText: 'var(--mui-palette-common-white)', activated: activatedTint('error') },
        info: { ...shakespeare, light: shakespeare[400], main: shakespeare[500], dark: shakespeare[600], contrastText: 'var(--mui-palette-common-white)', activated: activatedTint('info') },
        neutral: { ...stormGrey },
        primary: primaryColorScheme(ramp, 'light'),
        secondary: { ...nevada, light: nevada[600], main: nevada[700], dark: nevada[800], contrastText: 'var(--mui-palette-common-white)', activated: activatedTint('secondary') },
        success: { ...kepple, light: kepple[400], main: kepple[500], dark: kepple[600], contrastText: 'var(--mui-palette-common-white)', activated: activatedTint('success') },
        text: {
          primary: 'var(--mui-palette-neutral-900)',
          primaryChannel: '33 38 54',
          secondary: 'var(--mui-palette-neutral-500)',
          secondaryChannel: '102 112 133',
          disabled: 'var(--mui-palette-neutral-400)',
        },
        warning: { ...california, light: california[400], main: california[500], dark: california[600], contrastText: 'var(--mui-palette-common-white)', activated: activatedTint('warning') },
        shadow: 'rgba(0, 0, 0, 0.08)',
        TableCell: { border: 'var(--mui-palette-divider)' },
      },
    },
  };
}
