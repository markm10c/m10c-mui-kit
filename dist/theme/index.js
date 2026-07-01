// src/theme/create-theme.tsx
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

// src/theme/colors.ts
var indigo = {
  50: "#eef2ff",
  100: "#e0e7ff",
  200: "#c7d2fe",
  300: "#a5b4fc",
  400: "#818cf8",
  500: "#6366f1",
  600: "#4f46e5",
  700: "#4338ca",
  800: "#3730a3",
  900: "#312e81",
  950: "#1e1b4b"
};
var california = {
  50: "#fffaea",
  100: "#fff3c6",
  200: "#ffe587",
  300: "#ffd049",
  400: "#ffbb1f",
  500: "#fb9c0c",
  600: "#de7101",
  700: "#b84d05",
  800: "#953b0b",
  900: "#7b310c",
  950: "#471701"
};
var kepple = {
  50: "#f0fdfa",
  100: "#ccfbef",
  200: "#9af5e1",
  300: "#5fe9ce",
  400: "#2ed3b8",
  500: "#15b79f",
  600: "#0e9382",
  700: "#107569",
  800: "#115e56",
  900: "#134e48",
  950: "#042f2c"
};
var neonBlue = {
  50: "#ecf0ff",
  100: "#dde3ff",
  200: "#c2cbff",
  300: "#9ca7ff",
  400: "#7578ff",
  500: "#635bff",
  600: "#4e36f5",
  700: "#432ad8",
  800: "#3725ae",
  900: "#302689",
  950: "#1e1650"
};
var nevada = {
  50: "#fbfcfe",
  100: "#f0f4f8",
  200: "#dde7ee",
  300: "#cdd7e1",
  400: "#9fa6ad",
  500: "#636b74",
  600: "#555e68",
  700: "#32383e",
  800: "#202427",
  900: "#121517",
  950: "#090a0b"
};
var redOrange = {
  50: "#fef3f2",
  100: "#fee4e2",
  200: "#ffcdc9",
  300: "#fdaaa4",
  400: "#f97970",
  500: "#f04438",
  600: "#de3024",
  700: "#bb241a",
  800: "#9a221a",
  900: "#80231c",
  950: "#460d09"
};
var shakespeare = {
  50: "#ecfdff",
  100: "#cff7fe",
  200: "#a4eefd",
  300: "#66e0fa",
  400: "#10bee8",
  500: "#04aad6",
  600: "#0787b3",
  700: "#0d6d91",
  800: "#145876",
  900: "#154964",
  950: "#082f44"
};
var stormGrey = {
  50: "#f9fafb",
  100: "#f1f1f4",
  200: "#dcdfe4",
  300: "#b3b9c6",
  400: "#8a94a6",
  500: "#667085",
  600: "#565e73",
  700: "#434a60",
  800: "#313749",
  900: "#212636",
  950: "#121621"
};

// src/theme/color-schemes.ts
var primaryRamps = {
  indigo,
  neonBlue
};
function activatedTint(color) {
  return `rgba(var(--mui-palette-${color}-mainChannel) / var(--mui-palette-action-activatedOpacity))`;
}
function primaryColorScheme(ramp, scheme) {
  return scheme === "dark" ? { ...ramp, light: ramp[300], main: ramp[400], dark: ramp[500], contrastText: "var(--mui-palette-common-white)", activated: activatedTint("primary") } : { ...ramp, light: ramp[400], main: ramp[500], dark: ramp[600], contrastText: "var(--mui-palette-common-white)", activated: activatedTint("primary") };
}
function colorSchemes(config) {
  const ramp = primaryRamps[config.primaryColor] ?? neonBlue;
  return {
    dark: {
      palette: {
        action: { disabledBackground: "rgba(0, 0, 0, 0.12)" },
        background: {
          default: "var(--mui-palette-neutral-950)",
          defaultChannel: "9 10 11",
          paper: "var(--mui-palette-neutral-900)",
          paperChannel: "18 21 23",
          level1: "var(--mui-palette-neutral-800)",
          level2: "var(--mui-palette-neutral-700)",
          level3: "var(--mui-palette-neutral-600)"
        },
        common: { black: "#000000", white: "#ffffff" },
        divider: "var(--mui-palette-neutral-700)",
        dividerChannel: "50 56 62",
        error: { ...redOrange, light: redOrange[300], main: redOrange[400], dark: redOrange[500], contrastText: "var(--mui-palette-common-black)", activated: activatedTint("error") },
        info: { ...shakespeare, light: shakespeare[300], main: shakespeare[400], dark: shakespeare[500], contrastText: "var(--mui-palette-common-black)", activated: activatedTint("info") },
        neutral: { ...nevada },
        primary: primaryColorScheme(ramp, "dark"),
        secondary: { ...nevada, light: nevada[100], main: nevada[200], dark: nevada[300], contrastText: "var(--mui-palette-common-black)", activated: activatedTint("secondary") },
        success: { ...kepple, light: kepple[300], main: kepple[400], dark: kepple[500], contrastText: "var(--mui-palette-common-black)", activated: activatedTint("success") },
        text: {
          primary: "var(--mui-palette-neutral-100)",
          primaryChannel: "240 244 248",
          secondary: "var(--mui-palette-neutral-400)",
          secondaryChannel: "159 166 173",
          disabled: "var(--mui-palette-neutral-600)"
        },
        warning: { ...california, light: california[300], main: california[400], dark: california[500], contrastText: "var(--mui-palette-common-black)", activated: activatedTint("warning") },
        shadow: "rgba(0, 0, 0, 0.5)",
        TableCell: { border: "var(--mui-palette-divider)" }
      }
    },
    light: {
      palette: {
        action: { disabledBackground: "rgba(0, 0, 0, 0.06)" },
        background: {
          default: "var(--mui-palette-common-white)",
          defaultChannel: "255 255 255",
          paper: "var(--mui-palette-common-white)",
          paperChannel: "255 255 255",
          level1: "var(--mui-palette-neutral-50)",
          level2: "var(--mui-palette-neutral-100)",
          level3: "var(--mui-palette-neutral-200)"
        },
        common: { black: "#000000", white: "#ffffff" },
        divider: "var(--mui-palette-neutral-200)",
        dividerChannel: "220 223 228",
        error: { ...redOrange, light: redOrange[400], main: redOrange[500], dark: redOrange[600], contrastText: "var(--mui-palette-common-white)", activated: activatedTint("error") },
        info: { ...shakespeare, light: shakespeare[400], main: shakespeare[500], dark: shakespeare[600], contrastText: "var(--mui-palette-common-white)", activated: activatedTint("info") },
        neutral: { ...stormGrey },
        primary: primaryColorScheme(ramp, "light"),
        secondary: { ...nevada, light: nevada[600], main: nevada[700], dark: nevada[800], contrastText: "var(--mui-palette-common-white)", activated: activatedTint("secondary") },
        success: { ...kepple, light: kepple[400], main: kepple[500], dark: kepple[600], contrastText: "var(--mui-palette-common-white)", activated: activatedTint("success") },
        text: {
          primary: "var(--mui-palette-neutral-900)",
          primaryChannel: "33 38 54",
          secondary: "var(--mui-palette-neutral-500)",
          secondaryChannel: "102 112 133",
          disabled: "var(--mui-palette-neutral-400)"
        },
        warning: { ...california, light: california[400], main: california[500], dark: california[600], contrastText: "var(--mui-palette-common-white)", activated: activatedTint("warning") },
        shadow: "rgba(0, 0, 0, 0.08)",
        TableCell: { border: "var(--mui-palette-divider)" }
      }
    }
  };
}

// src/theme/components/avatar.tsx
var MuiAvatar = {
  styleOverrides: { root: { fontSize: "14px", fontWeight: 600, letterSpacing: 0 } }
};

// src/theme/components/button.tsx
var MuiButton = {
  styleOverrides: {
    root: { borderRadius: "12px", textTransform: "none" },
    sizeSmall: { padding: "6px 16px" },
    sizeMedium: { padding: "8px 20px" },
    sizeLarge: { padding: "11px 24px" },
    textSizeSmall: { padding: "7px 12px" },
    textSizeMedium: { padding: "9px 16px" },
    textSizeLarge: { padding: "12px 16px" }
  }
};

// src/theme/components/card.tsx
import { paperClasses } from "@mui/material/Paper";
var MuiCard = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        borderRadius: "20px",
        [`&.${paperClasses.elevation1}`]: {
          boxShadow: theme.palette.mode === "dark" ? "0 5px 22px 0 rgba(0, 0, 0, 0.24), 0 0 0 1px rgba(255, 255, 255, 0.12)" : "0 5px 22px 0 rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)"
        }
      };
    }
  }
};

// src/theme/components/card-content.tsx
var MuiCardContent = {
  styleOverrides: { root: { padding: "32px 24px", "&:last-child": { paddingBottom: "32px" } } }
};

// src/theme/components/card-header.tsx
var MuiCardHeader = {
  defaultProps: { titleTypographyProps: { variant: "h6" }, subheaderTypographyProps: { variant: "body2" } },
  styleOverrides: { root: { padding: "32px 24px 16px" } }
};

// src/theme/components/link.tsx
var MuiLink = { defaultProps: { underline: "hover" } };

// src/theme/components/stack.tsx
var MuiStack = { defaultProps: { useFlexGap: true } };

// src/theme/components/tab.tsx
var MuiTab = {
  styleOverrides: {
    root: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.71,
      minWidth: "auto",
      paddingLeft: 0,
      paddingRight: 0,
      textTransform: "none",
      "& + &": { marginLeft: "24px" }
    }
  }
};

// src/theme/components/table-body.tsx
import { tableCellClasses } from "@mui/material/TableCell";
import { tableRowClasses } from "@mui/material/TableRow";
var MuiTableBody = {
  styleOverrides: {
    root: {
      [`& .${tableRowClasses.root}:last-child`]: { [`& .${tableCellClasses.root}`]: { "--TableCell-borderWidth": 0 } }
    }
  }
};

// src/theme/components/table-cell.tsx
var MuiTableCell = {
  styleOverrides: {
    root: { borderBottom: "var(--TableCell-borderWidth, 1px) solid var(--mui-palette-TableCell-border)" },
    paddingCheckbox: { padding: "0 0 0 24px" }
  }
};

// src/theme/components/table-head.tsx
import { tableCellClasses as tableCellClasses2 } from "@mui/material/TableCell";
var MuiTableHead = {
  styleOverrides: {
    root: {
      [`& .${tableCellClasses2.root}`]: {
        backgroundColor: "var(--mui-palette-background-level1)",
        color: "var(--mui-palette-text-secondary)",
        lineHeight: 1
      }
    }
  }
};

// src/theme/components/components.ts
var components = {
  MuiAvatar,
  MuiButton,
  MuiCard,
  MuiCardContent,
  MuiCardHeader,
  MuiLink,
  MuiStack,
  MuiTab,
  MuiTableBody,
  MuiTableCell,
  MuiTableHead
};

// src/theme/shadows.ts
var shadows = [
  "none",
  "0px 1px 2px var(--mui-palette-shadow)",
  "0px 1px 5px var(--mui-palette-shadow)",
  "0px 1px 8px var(--mui-palette-shadow)",
  "0px 1px 10px var(--mui-palette-shadow)",
  "0px 1px 14px var(--mui-palette-shadow)",
  "0px 1px 18px var(--mui-palette-shadow)",
  "0px 2px 16px var(--mui-palette-shadow)",
  "0px 3px 14px var(--mui-palette-shadow)",
  "0px 3px 16px var(--mui-palette-shadow)",
  "0px 4px 18px var(--mui-palette-shadow)",
  "0px 4px 20px var(--mui-palette-shadow)",
  "0px 5px 22px var(--mui-palette-shadow)",
  "0px 5px 24px var(--mui-palette-shadow)",
  "0px 5px 26px var(--mui-palette-shadow)",
  "0px 6px 28px var(--mui-palette-shadow)",
  "0px 6px 30px var(--mui-palette-shadow)",
  "0px 6px 32px var(--mui-palette-shadow)",
  "0px 7px 34px var(--mui-palette-shadow)",
  "0px 7px 36px var(--mui-palette-shadow)",
  "0px 8px 38px var(--mui-palette-shadow)",
  "0px 8px 40px var(--mui-palette-shadow)",
  "0px 8px 42px var(--mui-palette-shadow)",
  "0px 9px 44px var(--mui-palette-shadow)",
  "0px 9px 46px var(--mui-palette-shadow)"
];

// src/theme/typography.ts
var typography = {
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
  body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.57 },
  button: { fontWeight: 500 },
  caption: { fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.66 },
  subtitle1: { fontSize: "1rem", fontWeight: 500, lineHeight: 1.57 },
  subtitle2: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.57 },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.5px",
    lineHeight: 2.5,
    textTransform: "uppercase"
  },
  h1: { fontSize: "3.5rem", fontWeight: 500, lineHeight: 1.2 },
  h2: { fontSize: "3rem", fontWeight: 500, lineHeight: 1.2 },
  h3: { fontSize: "2.25rem", fontWeight: 500, lineHeight: 1.2 },
  h4: { fontSize: "2rem", fontWeight: 500, lineHeight: 1.2 },
  h5: { fontSize: "1.5rem", fontWeight: 500, lineHeight: 1.2 },
  h6: { fontSize: "1.125rem", fontWeight: 500, lineHeight: 1.2 }
};

// src/theme/create-theme.tsx
function createMuiKitTheme(config) {
  const schemes = colorSchemes({ primaryColor: config.primaryColor });
  const mergeScheme = (scheme, palette) => palette ? deepmerge(scheme ?? {}, { palette }) : scheme;
  const theme = createTheme({
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
    colorSchemes: {
      light: mergeScheme(schemes.light, config.paletteOverrides?.light),
      dark: mergeScheme(schemes.dark, config.paletteOverrides?.dark)
    },
    components: {
      ...components,
      MuiStack: {
        defaultProps: {
          useFlexGap: true
        }
      },
      ...config.linkComponent ? {
        MuiLink: {
          ...components.MuiLink,
          defaultProps: {
            ...components.MuiLink?.defaultProps,
            component: config.linkComponent
          }
        }
      } : {}
    },
    cssVariables: {
      colorSchemeSelector: "class"
    },
    direction: config.direction,
    shadows,
    shape: { borderRadius: 8 },
    typography
  });
  return theme;
}
export {
  createMuiKitTheme
};
//# sourceMappingURL=index.js.map