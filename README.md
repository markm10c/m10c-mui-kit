# m10c-mui-kit

A shared [MUI](https://mui.com)-based UI toolkit for m10c admin projects. It
provides a configurable theme plus a set of ready-made form fields, components,
and hooks, so admin projects share one consistent look and set of building
blocks.

Import directly from the relevant path:

```typescript
import { createMuiKitTheme } from 'm10c-mui-kit/theme';
import { Toaster, SeverityPill } from 'm10c-mui-kit/components';
import { FieldText, SubmitButton } from 'm10c-mui-kit/form';
import { usePopover } from 'm10c-mui-kit/hooks';
```

## Theme

The theme is built in layers, each one overriding the one before it:

1. **MUI defaults** — the standard MUI base theme.
2. **The kit** — `createMuiKitTheme` applies the shared m10c look (palette,
   shape, component defaults) on top of MUI.
3. **The project** — each project takes the kit's theme and layers its own
   palette, typography, and component overrides on top, so it can diverge where
   needed while keeping the shared base.

In the simplest case a project just calls `createMuiKitTheme` and passes the
result to MUI's `ThemeProvider`:

```typescript
import { createMuiKitTheme } from 'm10c-mui-kit/theme';
import { ThemeProvider } from '@mui/material/styles';

const theme = createMuiKitTheme({ primaryColor: 'indigo' });

<ThemeProvider theme={theme} defaultMode="light">
  <App />
</ThemeProvider>
```

`createMuiKitTheme` accepts overrides for the common cases:

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

For anything beyond those options, layer a project theme on top with MUI's own
`createTheme`. This is the third layer — the project keeps the kit's base and
overrides only what it needs (here, typography and component styles):

```typescript
import { createTheme } from '@mui/material/styles';
import { createMuiKitTheme } from 'm10c-mui-kit/theme';

const base = createMuiKitTheme({ primaryColor: 'indigo' });

const theme = createTheme(base, {
  typography: { h1: { fontFamily: "'Plus Jakarta Sans', sans-serif" } },
});

theme.components = projectComponentOverrides; // project-specific MUI overrides
```

## Components, form fields, and hooks

Components are standard MUI-styled React components and take their own props.

Form fields are built for [`react-typed-form`](../react-typed-form) — give each
one a form field via its `field` prop, and it handles value/validation wiring:

```typescript
import { FieldText, SubmitButton } from 'm10c-mui-kit/form';

<FieldText field={form.getField('name')} label="Name" />
<SubmitButton form={form}>Save</SubmitButton>
```
