# @m10c/mui-kit

MUI-based admin UI toolkit (theme, form, components, hooks) for m10c admin projects.

## Setup

```bash
yarn add @m10c/mui-kit
```

```typescript
import { createMuiKitTheme } from '@m10c/mui-kit/theme';
import { ThemeProvider } from '@mui/material/styles';

const theme = createMuiKitTheme({ primaryColor: 'indigo' });

<ThemeProvider theme={theme} defaultMode="light">
  <App />
</ThemeProvider>
```

## Overrides

```typescript
createMuiKitTheme({
  primaryColor: 'blue',
  direction: 'rtl',          // optional, defaults to ltr
  linkComponent: NextLink,   // optional, wires a router link into MuiLink
  paletteOverrides: {        // optional, deep-merged per color scheme
    light: { background: { default: '#fafafa' } },
    dark: { background: { default: '#101010' } },
  },
});
```
