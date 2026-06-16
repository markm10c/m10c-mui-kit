import type { ElementType } from "react";
import type { ColorSystemOptions, PaletteOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { colorSchemes } from "./color-schemes";
import { components } from "./components/components";
import { shadows } from "./shadows";
import type { Direction, PrimaryColor, Theme } from "./types";
import { typography } from "./typography";

export interface ThemeConfig {
  primaryColor: PrimaryColor;
  direction?: Direction;
  // Consumer-provided router link wired into MuiLink (e.g. next/link or
  // react-router Link). The kit stays router-agnostic; omit for a plain anchor.
  linkComponent?: ElementType;
  paletteOverrides?: { light?: PaletteOptions; dark?: PaletteOptions };
}

export function createMuiKitTheme(config: ThemeConfig): Theme {
  const schemes = colorSchemes({ primaryColor: config.primaryColor });

  const mergeScheme = (
    scheme: ColorSystemOptions | undefined,
    palette: PaletteOptions | undefined,
  ): ColorSystemOptions | undefined =>
    palette ? deepmerge(scheme ?? {}, { palette }) : scheme;

  const theme = createTheme({
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
    colorSchemes: {
      light: mergeScheme(schemes.light, config.paletteOverrides?.light),
      dark: mergeScheme(schemes.dark, config.paletteOverrides?.dark),
    },
    components: {
      ...components,
      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },
      ...(config.linkComponent
        ? {
            MuiLink: {
              ...components.MuiLink,
              defaultProps: {
                ...components.MuiLink?.defaultProps,
                component: config.linkComponent,
              },
            },
          }
        : {}),
    },
    cssVariables: {
      colorSchemeSelector: "class",
    },
    direction: config.direction,
    shadows,
    shape: { borderRadius: 8 },
    typography,
  });

  return theme;
}
