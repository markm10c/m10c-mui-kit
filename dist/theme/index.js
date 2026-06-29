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
var chateauGreen = {
  50: "#edfcf2",
  100: "#d2f9de",
  200: "#aaf0c4",
  300: "#72e3a3",
  400: "#3acd7e",
  500: "#16b364",
  600: "#0a9150",
  700: "#087442",
  800: "#095c37",
  900: "#094b2f",
  950: "#032b1a"
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
var royalBlue = {
  50: "#ecf3ff",
  100: "#dce8ff",
  200: "#c0d4ff",
  300: "#9bb6ff",
  400: "#738dff",
  500: "#5265ff",
  600: "#3339f8",
  700: "#3739de",
  800: "#2225b1",
  900: "#24298b",
  950: "#151651"
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
var tomatoOrange = {
  50: "#fff3ed",
  100: "#ffe2d4",
  200: "#ffc1a8",
  300: "#ffa280",
  400: "#ff9771",
  500: "#ff6c47",
  600: "#fe4011",
  700: "#ed3507",
  800: "#9f2c0f",
  900: "#7e1110",
  950: "#440608"
};

// src/theme/color-schemes.ts
var primarySchemes = {
  indigo: {
    dark: {
      ...indigo,
      light: indigo[300],
      main: indigo[400],
      dark: indigo[500],
      contrastText: "var(--mui-palette-common-white)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    },
    light: {
      ...indigo,
      light: indigo[400],
      main: indigo[500],
      dark: indigo[600],
      contrastText: "var(--mui-palette-common-white)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    }
  },
  chateauGreen: {
    dark: {
      ...chateauGreen,
      light: chateauGreen[300],
      main: chateauGreen[400],
      dark: chateauGreen[500],
      contrastText: "var(--mui-palette-common-black)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    },
    light: {
      ...chateauGreen,
      light: chateauGreen[400],
      main: chateauGreen[500],
      dark: chateauGreen[600],
      contrastText: "var(--mui-palette-common-white)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    }
  },
  neonBlue: {
    dark: {
      ...neonBlue,
      light: neonBlue[300],
      main: neonBlue[400],
      dark: neonBlue[500],
      contrastText: "var(--mui-palette-common-black)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    },
    light: {
      ...neonBlue,
      light: neonBlue[400],
      main: neonBlue[500],
      dark: neonBlue[600],
      contrastText: "var(--mui-palette-common-white)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    }
  },
  royalBlue: {
    dark: {
      ...royalBlue,
      light: royalBlue[300],
      main: royalBlue[400],
      dark: royalBlue[500],
      contrastText: "var(--mui-palette-common-black)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    },
    light: {
      ...royalBlue,
      light: royalBlue[400],
      main: royalBlue[500],
      dark: royalBlue[600],
      contrastText: "var(--mui-palette-common-white)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    }
  },
  tomatoOrange: {
    dark: {
      ...tomatoOrange,
      light: tomatoOrange[300],
      main: tomatoOrange[400],
      dark: tomatoOrange[500],
      contrastText: "var(--mui-palette-common-black)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    },
    light: {
      ...tomatoOrange,
      light: tomatoOrange[400],
      main: tomatoOrange[500],
      dark: tomatoOrange[600],
      contrastText: "var(--mui-palette-common-white)",
      activated: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
      hovered: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
      selected: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
    }
  }
};
function colorSchemes(config) {
  let primary = primarySchemes[config.primaryColor];
  if (!primary) {
    console.warn(
      `No primary color found for ${config.primaryColor}. Using neonBlue instead.`
    );
    primary = primarySchemes.neonBlue;
  }
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
        error: {
          ...redOrange,
          light: redOrange[300],
          main: redOrange[400],
          dark: redOrange[500],
          contrastText: "var(--mui-palette-common-black)",
          activated: "rgba(var(--mui-palette-error-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-error-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-error-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        info: {
          ...shakespeare,
          light: shakespeare[300],
          main: shakespeare[400],
          dark: shakespeare[500],
          contrastText: "var(--mui-palette-common-black)",
          activated: "rgba(var(--mui-palette-info-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-info-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-info-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        neutral: { ...nevada },
        primary: primary.dark,
        secondary: {
          ...nevada,
          light: nevada[100],
          main: nevada[200],
          dark: nevada[300],
          contrastText: "var(--mui-palette-common-black)",
          activated: "rgba(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        success: {
          ...kepple,
          light: kepple[300],
          main: kepple[400],
          dark: kepple[500],
          contrastText: "var(--mui-palette-common-black)",
          activated: "rgba(var(--mui-palette-success-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-success-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-success-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        text: {
          primary: "var(--mui-palette-neutral-100)",
          primaryChannel: "240 244 248",
          secondary: "var(--mui-palette-neutral-400)",
          secondaryChannel: "159 166 173",
          disabled: "var(--mui-palette-neutral-600)"
        },
        warning: {
          ...california,
          light: california[300],
          main: california[400],
          dark: california[500],
          contrastText: "var(--mui-palette-common-black)",
          activated: "rgba(var(--mui-palette-warning-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-warning-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-warning-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        shadow: "rgba(0, 0, 0, 0.5)",
        Avatar: { defaultBg: "var(--mui-palette-neutral-200)" },
        Backdrop: { bg: "rgba(0, 0, 0, 0.5)" },
        OutlinedInput: { border: "var(--mui-palette-neutral-700)" },
        TableCell: { border: "var(--mui-palette-divider)" },
        Tooltip: { bg: "rgba(10, 13, 20, 0.75)" }
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
        error: {
          ...redOrange,
          light: redOrange[400],
          main: redOrange[500],
          dark: redOrange[600],
          contrastText: "var(--mui-palette-common-white)",
          activated: "rgba(var(--mui-palette-error-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-error-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-error-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        info: {
          ...shakespeare,
          light: shakespeare[400],
          main: "#22CBEE",
          dark: shakespeare[600],
          contrastText: "var(--mui-palette-common-white)",
          activated: "rgba(var(--mui-palette-info-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-info-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-info-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        neutral: { ...stormGrey },
        primary: primary.light,
        secondary: {
          ...nevada,
          light: nevada[600],
          main: nevada[700],
          dark: nevada[800],
          contrastText: "var(--mui-palette-common-white)",
          activated: "rgba(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        success: {
          ...kepple,
          light: kepple[400],
          main: kepple[500],
          dark: kepple[600],
          contrastText: "var(--mui-palette-common-white)",
          activated: "rgba(var(--mui-palette-success-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-success-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-success-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        text: {
          primary: "var(--mui-palette-neutral-900)",
          primaryChannel: "33 38 54",
          secondary: "var(--mui-palette-neutral-500)",
          secondaryChannel: "102 112 133",
          disabled: "var(--mui-palette-neutral-400)"
        },
        warning: {
          ...california,
          light: california[400],
          main: california[500],
          dark: california[600],
          contrastText: "var(--mui-palette-common-white)",
          activated: "rgba(var(--mui-palette-warning-mainChannel) / var(--mui-palette-action-activatedOpacity))",
          hovered: "rgba(var(--mui-palette-warning-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          selected: "rgba(var(--mui-palette-warning-mainChannel) / var(--mui-palette-action-selectedOpacity))"
        },
        shadow: "rgba(0, 0, 0, 0.08)",
        Avatar: { defaultBg: "var(--mui-palette-neutral-600)" },
        Backdrop: { bg: "rgb(18, 22, 33, 0.8)" },
        OutlinedInput: { border: "var(--mui-palette-neutral-200)" },
        TableCell: { border: "var(--mui-palette-divider)" },
        Tooltip: { bg: "rgba(10, 13, 20, 0.75)" }
      }
    }
  };
}

// src/theme/components/alert.tsx
var MuiAlert = {
  styleOverrides: { message: { fontWeight: 500 } }
};

// src/theme/components/autocomplete.tsx
var MuiAutocomplete = {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput-root": {
        padding: "0px 30px 0px 12px",
        "& .MuiAutocomplete-input": {
          padding: 0
        }
      }
    },
    paper: {
      border: "1px solid var(--mui-palette-divider)",
      boxShadow: "var(--mui-shadows-16)",
      marginTop: 6
    },
    listbox: {
      padding: 8,
      gap: 4,
      "& .MuiAutocomplete-option": {
        padding: "4px 8px",
        borderRadius: 9
      }
    }
  }
};

// src/theme/components/avatar.tsx
import { User as UserIcon } from "@phosphor-icons/react/dist/ssr/User";
import { jsx } from "react/jsx-runtime";
var MuiAvatar = {
  defaultProps: { children: /* @__PURE__ */ jsx(UserIcon, { fontSize: "var(--Icon-fontSize)" }) },
  styleOverrides: {
    root: {
      "--Icon-fontSize": "var(--icon-fontSize-md)",
      fontSize: "0.875rem",
      fontWeight: 500,
      height: "var(--Avatar-size, 40px)",
      letterSpacing: 0,
      width: "var(--Avatar-size, 40px)"
    }
  }
};

// src/theme/components/backdrop.tsx
import { backdropClasses } from "@mui/material/Backdrop";
var MuiBackdrop = {
  styleOverrides: {
    root: {
      [`&:not(.${backdropClasses.invisible})`]: {
        backgroundColor: "var(--mui-palette-Backdrop-bg)"
      }
    }
  }
};

// src/theme/components/button.tsx
import { buttonClasses } from "@mui/material/Button";
function getContainedVars(color) {
  return {
    "--Button-containedBg": `var(--mui-palette-${color}-dark)`,
    "--Button-containedBgGradient": `linear-gradient(180deg, var(--mui-palette-${color}-main) 0%, var(--mui-palette-${color}-dark) 100%)`,
    "--Button-containedStroke": `inset 0px 0px 0px 1px var(--mui-palette-${color}-dark), inset 0px 2px 0px 0px rgba(255, 255, 255, 0.16)`
  };
}
function getOutlinedVars(color, dark) {
  const vars = {
    "--Button-outlinedBorder": `var(--mui-palette-${color}-main)`,
    "--Button-outlinedHoverBg": `var(--mui-palette-${color}-hovered)`,
    "--Button-outlinedActiveBg": `var(--mui-palette-${color}-activated)`
  };
  if (color === "secondary") {
    vars["--Button-outlinedBorder"] = dark ? "var(--mui-palette-secondary-700)" : "var(--mui-palette-secondary-200)";
  }
  return vars;
}
function getTextVars(color) {
  return {
    "--Button-textHoverBg": `var(--mui-palette-${color}-hovered)`,
    "--Button-textActiveBg": `var(--mui-palette-${color}-activated)`
  };
}
var MuiButton = {
  defaultProps: { disableRipple: true },
  styleOverrides: {
    root: {
      borderRadius: "8px",
      minHeight: "var(--Button-minHeight)",
      minWidth: "unset",
      textTransform: "none",
      "&:focus-visible": {
        outline: "2px solid var(--mui-palette-primary-main)"
      }
    },
    text: {
      "&:hover": { backgroundColor: "var(--Button-textHoverBg)" },
      "&:active": { backgroundColor: "var(--Button-textActiveBg)" }
    },
    textPrimary: getTextVars("primary"),
    textSecondary: getTextVars("secondary"),
    textSuccess: getTextVars("success"),
    textInfo: getTextVars("info"),
    textWarning: getTextVars("warning"),
    textError: getTextVars("error"),
    outlined: {
      boxShadow: "var(--mui-shadows-1)",
      borderColor: "var(--Button-outlinedBorder)",
      "&:hover": {
        borderColor: "var(--Button-outlinedBorder)",
        backgroundColor: "var(--Button-outlinedHoverBg)"
      },
      "&:active": { backgroundColor: "var(--Button-outlinedActiveBg)" }
    },
    outlinedPrimary: ({ theme }) => {
      return getOutlinedVars("primary", theme.palette.mode === "dark");
    },
    outlinedSecondary: ({ theme }) => {
      return getOutlinedVars("secondary", theme.palette.mode === "dark");
    },
    outlinedSuccess: ({ theme }) => {
      return getOutlinedVars("success", theme.palette.mode === "dark");
    },
    outlinedInfo: ({ theme }) => {
      return getOutlinedVars("info", theme.palette.mode === "dark");
    },
    outlinedWarning: ({ theme }) => {
      return getOutlinedVars("warning", theme.palette.mode === "dark");
    },
    outlinedError: ({ theme }) => {
      return getOutlinedVars("error", theme.palette.mode === "dark");
    },
    contained: {
      backgroundColor: "var(--Button-containedBg)",
      backgroundImage: "var(--Button-containedBgGradient)",
      boxShadow: "var(--mui-shadows-1), var(--Button-containedStroke)",
      overflow: "hidden",
      "&:hover": {
        boxShadow: "var(--mui-shadows-8), var(--Button-containedStroke), inset 0px 6px 10px 0px rgba(255, 255, 255, 0.10)"
      },
      "&:active": { backgroundImage: "var(--Button-containedBg)" },
      "&:focus-visible": {
        boxShadow: "var(--mui-shadows-8)",
        outlineOffset: "1px"
      },
      [`&.${buttonClasses.disabled}`]: {
        backgroundImage: "none",
        "&::before": { boxShadow: "none" }
      }
    },
    containedPrimary: getContainedVars("primary"),
    containedSecondary: getContainedVars("secondary"),
    containedSuccess: getContainedVars("success"),
    containedInfo: getContainedVars("info"),
    containedWarning: getContainedVars("warning"),
    containedError: getContainedVars("error"),
    sizeSmall: {
      "--Button-minHeight": "32x",
      fontSize: "0.8125rem",
      lineHeight: "24px"
    },
    sizeMedium: {
      "--Button-minHeight": "40x",
      fontSize: "0.875rem",
      lineHeight: "28px"
    },
    sizeLarge: {
      "--Button-minHeight": "48x",
      fontSize: "0.9375rem",
      lineHeight: "32px"
    }
  }
};

// src/theme/components/button-base.tsx
var MuiButtonBase = {
  defaultProps: { disableRipple: true }
};

// src/theme/components/button-group.tsx
var MuiButtonGroup = {
  defaultProps: { disableRipple: true }
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

// src/theme/components/card-actions.tsx
var MuiCardActions = {
  styleOverrides: { root: { padding: "8px 16px 16px" } }
};

// src/theme/components/card-content.tsx
var MuiCardContent = {
  styleOverrides: {
    root: {
      padding: "16px 24px 32px 24px",
      "&:last-child": { paddingBottom: "32px" }
    }
  }
};

// src/theme/components/card-header.tsx
import { avatarClasses } from "@mui/material/Avatar";
var MuiCardHeader = {
  defaultProps: {
    titleTypographyProps: { variant: "h6" },
    subheaderTypographyProps: { variant: "body2" }
  },
  styleOverrides: {
    root: { padding: "32px 24px 16px" },
    avatar: {
      [`& .${avatarClasses.root}`]: {
        "--Icon-fontSize": "var(--icon-fontSize-lg)",
        backgroundColor: "var(--mui-palette-background-paper)",
        boxShadow: "var(--mui-shadows-8)",
        color: "var(--mui-palette-text-primary)"
      }
    }
  }
};

// src/theme/components/checkbox.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Icon() {
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      fill: "none",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx2(
        "path",
        {
          clipRule: "evenodd",
          d: "M8 2C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2H8ZM8 4C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      )
    }
  );
}
function CheckedIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      fill: "none",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx2("rect", { fill: "currentColor", height: "20", rx: "6", width: "20", x: "2", y: "2" }),
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M7.55566 11.7222L10.5186 14.7778L16.4446 8.66669",
            stroke: "white",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2"
          }
        )
      ]
    }
  );
}
function IndeterminateIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      fill: "none",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx2(
          "path",
          {
            clipRule: "evenodd",
            d: "M8 2C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2H8ZM8 4C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8Z",
            fill: "currentColor",
            fillRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M8 12H16",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2"
          }
        )
      ]
    }
  );
}
var MuiCheckbox = {
  defaultProps: {
    checkedIcon: /* @__PURE__ */ jsx2(CheckedIcon, {}),
    color: "primary",
    disableRipple: true,
    icon: /* @__PURE__ */ jsx2(Icon, {}),
    indeterminateIcon: /* @__PURE__ */ jsx2(IndeterminateIcon, {})
  },
  styleOverrides: {
    root: {
      borderRadius: "8px",
      padding: 0,
      "&.Mui-focusVisible": {
        outline: "2px solid var(--mui-palette-primary-main)"
      }
    }
  }
};

// src/theme/components/chip.tsx
import { chipClasses } from "@mui/material/Chip";
import { XCircle as XCircleIcon } from "@phosphor-icons/react/dist/ssr/XCircle";
import { jsx as jsx3 } from "react/jsx-runtime";
function getSoftVars(color, dark) {
  if (dark) {
    return {
      "--Chip-softBg": `var(--mui-palette-${color}-800)`,
      "--Chip-softColor": `var(--mui-palette-${color}-200)`,
      "--Chip-softDisabledBg": `var(--mui-palette-${color}-800)`,
      "--Chip-softDisabledColor": `var(--mui-palette-${color}-500)`,
      "--Chip-softHoverBg": `var(--mui-palette-${color}-700)`,
      "--Chip-softDeleteIconColor": `var(--mui-palette-${color}-200)`,
      "--Chip-softDeleteIconHoverColor": `var(--mui-palette-${color}-50)`
    };
  }
  return {
    "--Chip-softBg": `var(--mui-palette-${color}-100)`,
    "--Chip-softColor": `var(--mui-palette-${color}-700)`,
    "--Chip-softDisabledBg": `var(--mui-palette-${color}-50)`,
    "--Chip-softDisabledColor": `var(--mui-palette-${color}-400)`,
    "--Chip-softHoverBg": `var(--mui-palette-${color}-200)`,
    "--Chip-softDeleteIconColor": `var(--mui-palette-${color}-700)`,
    "--Chip-softDeleteIconHoverColor": `var(--mui-palette-${color}-800)`
  };
}
var MuiChip = {
  defaultProps: {
    color: "secondary",
    // default will be removed in material v6
    deleteIcon: /* @__PURE__ */ jsx3(XCircleIcon, {})
  },
  styleOverrides: {
    root: { borderRadius: "12px", fontWeight: 500 },
    outlinedSecondary: ({ theme }) => {
      if (theme.palette.mode === "dark") {
        return {
          borderColor: "var(--mui-palette-secondary-700)",
          color: "var(--mui-palette-secondary-50)"
        };
      }
      return {
        borderColor: "var(--mui-palette-secondary-200)",
        color: "var(--mui-palette-secondary-900)"
      };
    },
    soft: ({ ownerState }) => {
      return {
        backgroundColor: "var(--Chip-softBg)",
        color: "var(--Chip-softColor)",
        ...ownerState.disabled && {
          backgroundColor: "var(--Chip-softDisabledBg)",
          color: "var(--Chip-softDisabledColor)"
        },
        ...ownerState.clickable && {
          "&:hover": { backgroundColor: "var(--Chip-softHoverBg)" }
        },
        [`& .${chipClasses.deleteIcon}`]: {
          color: "var(--Chip-softDeleteIconColor)",
          "&:hover": { color: "var(--Chip-softDeleteIconHoverColor)" }
        },
        "&.Mui-focusVisible": { backgroundColor: "var(--Chip-softHoverBg)" }
      };
    },
    softPrimary: ({ theme }) => {
      return getSoftVars("primary", theme.palette.mode === "dark");
    },
    softSecondary: ({ theme }) => {
      return getSoftVars("secondary", theme.palette.mode === "dark");
    },
    softSuccess: ({ theme }) => {
      return getSoftVars("success", theme.palette.mode === "dark");
    },
    softInfo: ({ theme }) => {
      return getSoftVars("info", theme.palette.mode === "dark");
    },
    softWarning: ({ theme }) => {
      return getSoftVars("warning", theme.palette.mode === "dark");
    },
    softError: ({ theme }) => {
      return getSoftVars("error", theme.palette.mode === "dark");
    },
    iconSmall: { fontSize: "var(--icon-fontSize-sm)" },
    iconMedium: { fontSize: "var(--icon-fontSize-md)" }
  }
};

// src/theme/components/filled-input.tsx
import { inputBaseClasses } from "@mui/material/InputBase";
var MuiFilledInput = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: { "label + &": { marginTop: "8px" } },
    input: {
      height: "auto",
      padding: 0,
      [`label[data-shrink=false]+.${inputBaseClasses.formControl} &`]: {
        "&::placeholder": { opacity: "1 !important" }
      },
      "&:-webkit-autofill": {
        marginInline: "calc(var(--Input-paddingInline) * -1)",
        paddingInline: "var(--Input-paddingInline)"
      }
    }
  }
};

// src/theme/components/form-control-label.tsx
var MuiFormControlLabel = {
  defaultProps: { slotProps: { typography: { variant: "subtitle2" } } },
  styleOverrides: { root: { gap: "8px", margin: 0 } }
};

// src/theme/components/form-group.tsx
var MuiFormGroup = {
  styleOverrides: { root: { gap: "16px" } }
};

// src/theme/components/form-label.tsx
var MuiFormLabel = {
  styleOverrides: {
    root: {
      color: "var(--mui-palette-text-primary)",
      fontSize: "0.875rem",
      fontWeight: 500
    }
  }
};

// src/theme/components/icon-button.tsx
var MuiIconButton = {
  defaultProps: { color: "secondary", disableRipple: true },
  styleOverrides: {
    root: {
      borderRadius: "8px",
      height: "var(--IconButton-size)",
      width: "var(--IconButton-size)",
      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
      "&:focus-visible": {
        outline: "2px solid var(--mui-palette-primary-main)"
      }
    },
    colorPrimary: {
      color: "var(--mui-palette-primary-main)",
      "&:hover": { backgroundColor: "var(--mui-palette-primary-hovered)" },
      "&:active": { backgroundColor: "var(--mui-palette-primary-activated)" }
    },
    colorSecondary: {
      color: "var(--mui-palette-secondary-main)",
      "&:hover": { backgroundColor: "var(--mui-palette-secondary-hovered)" },
      "&:active": { backgroundColor: "var(--mui-palette-secondary-activated)" }
    },
    colorInfo: {
      color: "var(--mui-palette-info-main)",
      "&:hover": { backgroundColor: "var(--mui-palette-info-hovered)" },
      "&:active": { backgroundColor: "var(--mui-palette-info-activated)" }
    },
    colorSuccess: {
      color: "var(--mui-palette-success-main)",
      "&:hover": { backgroundColor: "var(--mui-palette-success-hovered)" },
      "&:active": { backgroundColor: "var(--mui-palette-success-activated)" }
    },
    colorWarning: {
      color: "var(--mui-palette-warning-main)",
      "&:hover": { backgroundColor: "var(--mui-palette-warning-hovered)" },
      "&:active": { backgroundColor: "var(--mui-palette-warning-activated)" }
    },
    colorError: {
      color: "var(--mui-palette-error-main)",
      "&:hover": { backgroundColor: "var(--mui-palette-error-hovered)" },
      "&:active": { backgroundColor: "var(--mui-palette-error-activated)" }
    },
    sizeSmall: { "--IconButton-size": "32px" },
    sizeMedium: { "--IconButton-size": "40px" },
    sizeLarge: { "--IconButton-size": "48px" }
  }
};

// src/theme/components/input.tsx
import { inputBaseClasses as inputBaseClasses2 } from "@mui/material/InputBase";
var MuiInput = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: { "label + &": { marginTop: "8px" } },
    input: {
      height: "auto",
      padding: 0,
      [`label[data-shrink=false]+.${inputBaseClasses2.formControl} &`]: {
        "&::placeholder": { opacity: "1 !important" }
      },
      "&:-webkit-autofill": {
        marginInline: "calc(var(--Input-paddingInline) * -1)",
        paddingInline: "var(--Input-paddingInline)"
      }
    }
  }
};

// src/theme/components/input-base.tsx
var MuiInputBase = {
  styleOverrides: {
    root: {
      "--Input-borderRadius": "8px",
      "--Input-paddingBlock": 0,
      "--Input-paddingInline": "12px",
      "--Input-minHeight": "40px",
      borderRadius: "var(--Input-borderRadius)",
      paddingBlock: "var(--Input-paddingBlock)",
      paddingInline: "var(--Input-paddingInline)",
      minHeight: "var(--Input-minHeight)"
    },
    input: {
      alignItems: "center",
      alignSelf: "stretch",
      display: "inline-flex !important",
      // Fix flicker
      fontSize: "var(--Input-fontSize, 1rem)",
      "&::placeholder": {
        color: "var(--mui-palette-text-secondary)",
        opacity: 1
      },
      "&:-webkit-autofill": {
        borderRadius: "inherit",
        marginBlock: "calc(var(--Input-paddingBlock) * -1)",
        marginInline: "calc(var(--Input-paddingInline) * -1)",
        paddingBlock: "var(--Input-paddingBlock)",
        paddingInline: "var(--Input-paddingInline)"
      }
    },
    multiline: { "--Input-paddingBlock": "12px" },
    sizeSmall: {
      "--Input-fontSize": "0.875rem",
      "--Input-paddingInline": "8px",
      "--Input-minHeight": "32px"
    }
  }
};

// src/theme/components/input-label.tsx
var MuiInputLabel = {
  styleOverrides: {
    root: { maxWidth: "100%", position: "static", transform: "none" }
  }
};

// src/theme/components/linear-progress.tsx
var MuiLinearProgress = {
  styleOverrides: { root: { borderRadius: "8px", overflow: "hidden" } }
};

// src/theme/components/link.tsx
var MuiLink = {
  defaultProps: { underline: "hover" }
};

// src/theme/components/list.tsx
var MuiList = {
  styleOverrides: { root: { "--ListItem-gap": "16px" } }
};

// src/theme/components/list-item.tsx
var MuiListItem = {
  styleOverrides: { root: { gap: "var(--ListItem-gap)" } }
};

// src/theme/components/list-item-avatar.tsx
var MuiListItemAvatar = {
  styleOverrides: { root: { minWidth: "auto" } }
};

// src/theme/components/list-item-button.tsx
var MuiListItemButton = {
  defaultProps: { disableRipple: true },
  styleOverrides: { root: { gap: "var(--ListItem-gap)" } }
};

// src/theme/components/list-item-icon.tsx
var MuiListItemIcon = {
  styleOverrides: {
    root: {
      color: "inherit",
      fontSize: "var(--icon-fontSize-md)",
      minWidth: "auto"
    }
  }
};

// src/theme/components/list-item-text.tsx
var MuiListItemText = {
  styleOverrides: { root: { margin: 0 } }
};

// src/theme/components/menu.tsx
var MuiMenu = {
  defaultProps: { disableScrollLock: true },
  styleOverrides: {
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      padding: "8px"
    }
  }
};

// src/theme/components/menu-item.tsx
import { listItemIconClasses } from "@mui/material/ListItemIcon";
var MuiMenuItem = {
  defaultProps: { disableRipple: true },
  styleOverrides: {
    root: {
      borderRadius: "8px",
      gap: "var(--ListItem-gap)",
      paddingBlock: "var(--MenuItem-paddingBlock, 4px)",
      paddingInline: "var(--MenuItem-paddingInline, 8px)",
      [`& .${listItemIconClasses.root}`]: { minWidth: "auto" }
    }
  }
};

// src/theme/components/outlined-input.tsx
import { inputBaseClasses as inputBaseClasses3 } from "@mui/material/InputBase";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
var MuiOutlinedInput = {
  defaultProps: { notched: false },
  styleOverrides: {
    root: {
      "--Input-focused": 0,
      "--Input-focusedHighlight": "var(--mui-palette-primary-main)",
      "--Input-focusedThickness": "2px",
      "--Input-borderWidth": "1px",
      "--Input-borderColor": "var(--mui-palette-OutlinedInput-border)",
      "--Input-boxShadow": "var(--mui-shadows-1)",
      border: "var(--Input-borderWidth) solid var(--Input-borderColor)",
      boxShadow: "var(--Input-boxShadow)",
      "&::before": {
        borderRadius: "inherit",
        bottom: 0,
        boxShadow: "0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)",
        content: '" "',
        left: 0,
        pointerEvents: "none",
        position: "absolute",
        right: 0,
        top: 0
      },
      "&:focus-within": { "&::before": { "--Input-focused": 1 } },
      "label + &": { marginTop: "8px" },
      [`&.${outlinedInputClasses.error}`]: {
        "--Input-borderColor": "var(--mui-palette-error-main)",
        "--Input-focusedHighlight": "var(--mui-palette-error-main)"
      },
      [`&.${outlinedInputClasses.disabled}`]: { "--Input-boxShadow": "none" }
    },
    input: {
      height: "auto",
      padding: 0,
      [`label[data-shrink=false]+.${inputBaseClasses3.formControl} &`]: {
        "&::placeholder": { opacity: "1 !important" }
      }
    },
    notchedOutline: { display: "none" }
  }
};

// src/theme/components/paper.tsx
var MuiPaper = {
  styleOverrides: { root: { backgroundImage: "none" } }
};

// src/theme/components/popover.tsx
var MuiPopover = {
  defaultProps: { disableScrollLock: true, elevation: 16 },
  styleOverrides: { paper: { border: "1px solid var(--mui-palette-divider)" } }
};

// src/theme/components/radio.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function Icon2() {
  return /* @__PURE__ */ jsx4(
    "svg",
    {
      fill: "none",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx4(
        "path",
        {
          clipRule: "evenodd",
          d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      )
    }
  );
}
function CheckedIcon2() {
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      fill: "none",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx4("rect", { fill: "currentColor", height: "20", rx: "10", width: "20", x: "2", y: "2" }),
        /* @__PURE__ */ jsx4("rect", { fill: "white", height: "8", rx: "4", width: "8", x: "8", y: "8" })
      ]
    }
  );
}
var MuiRadio = {
  defaultProps: {
    checkedIcon: /* @__PURE__ */ jsx4(CheckedIcon2, {}),
    color: "primary",
    disableRipple: true,
    icon: /* @__PURE__ */ jsx4(Icon2, {})
  },
  styleOverrides: { root: { padding: 0 } }
};

// src/theme/components/select.tsx
import { CaretDown as CaretDownIcon } from "@phosphor-icons/react/dist/ssr/CaretDown";
import { jsx as jsx5 } from "react/jsx-runtime";
function IconComponent() {
  return /* @__PURE__ */ jsx5(
    CaretDownIcon,
    {
      fontSize: "1em",
      style: {
        flex: "0 0 auto",
        pointerEvents: "none",
        position: "absolute",
        right: "7px",
        top: "calc(50% - .5em)"
      }
    }
  );
}
var MuiSelect = {
  defaultProps: {
    displayEmpty: true,
    IconComponent,
    MenuProps: { sx: { mt: "4px" } }
  },
  styleOverrides: { select: { height: "auto", minHeight: "auto" } }
};

// src/theme/components/stack.tsx
var MuiStack = {
  defaultProps: { useFlexGap: true }
};

// src/theme/components/switch.tsx
var MuiSwitch = {
  defaultProps: { color: "primary", disableRipple: true },
  styleOverrides: {
    root: { marginLeft: "-12px", marginRight: "-12px" },
    switchBase: { color: "var(--mui-palette-neutral-500)" },
    track: { backgroundColor: "var(--mui-palette-neutral-400)", opacity: 1 }
  }
};

// src/theme/components/tab.tsx
var MuiTab = {
  defaultProps: { disableRipple: true },
  styleOverrides: {
    root: {
      minWidth: "auto",
      paddingInline: 0,
      textTransform: "none",
      "&:hover": { color: "var(--mui-palette-text-primary)" },
      "&:focus-visible": {
        outline: "2px solid var(--mui-palette-primary-main)"
      }
    }
  }
};

// src/theme/components/table-body.tsx
import { tableCellClasses } from "@mui/material/TableCell";
import { tableRowClasses } from "@mui/material/TableRow";
var MuiTableBody = {
  styleOverrides: {
    root: {
      [`& .${tableRowClasses.root}:last-child`]: {
        [`& .${tableCellClasses.root}`]: { "--TableCell-borderWidth": 0 }
      }
    }
  }
};

// src/theme/components/table-cell.tsx
var MuiTableCell = {
  styleOverrides: {
    root: {
      borderBottom: "var(--TableCell-borderWidth, 1px) solid var(--mui-palette-TableCell-border)"
    },
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

// src/theme/components/table-pagination.tsx
import { CaretLeft as CaretLeftIcon } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { CaretRight as CaretRightIcon } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { jsx as jsx6 } from "react/jsx-runtime";
function PreviousButtonIcon() {
  return /* @__PURE__ */ jsx6(CaretLeftIcon, { fontSize: "var(--fontSize-md)" });
}
function NextButtonIcon() {
  return /* @__PURE__ */ jsx6(CaretRightIcon, { fontSize: "var(--fontSize-md)" });
}
var MuiTablePagination = {
  defaultProps: {
    slotProps: {
      actions: {
        nextButtonIcon: { component: NextButtonIcon },
        previousButtonIcon: { component: PreviousButtonIcon }
      },
      select: { size: "small", variant: "outlined" }
    }
  },
  styleOverrides: { input: { marginRight: "16px", padding: 0 } }
};

// src/theme/components/tabs.tsx
import { tabClasses } from "@mui/material/Tab";
import { tabsClasses } from "@mui/material/Tabs";
var MuiTabs = {
  styleOverrides: {
    flexContainer: {
      [`&:not(.${tabsClasses.flexContainerVertical})`]: { gap: "24px" }
    },
    indicator: {
      height: "4px",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px"
    },
    vertical: {
      [`& .${tabsClasses.indicator}`]: {
        borderBottomRightRadius: "4px",
        borderTopRightRadius: "4px",
        left: 0,
        right: "auto",
        width: "4px"
      },
      [`& .${tabClasses.root}`]: {
        justifyContent: "flex-start",
        paddingInline: "24px"
      }
    }
  }
};

// src/theme/components/toggle-button.tsx
var MuiToggleButton = {
  defaultProps: { disableRipple: true },
  styleOverrides: {
    root: {
      color: "var(--mui-palette-text-primary)",
      fontSize: "var(--icon-fontSize-md)",
      padding: "6px"
    }
  }
};

// src/theme/components/toggle-button-group.tsx
var MuiToggleButtonGroup = {
  styleOverrides: {
    root: {
      border: "1px solid var(--mui-palette-divider)",
      boxShadow: "var(--mui-shadows-1)",
      gap: "4px",
      padding: "4px"
    },
    grouped: { border: 0, margin: 0 },
    firstButton: { borderRadius: "8px" },
    middleButton: { borderRadius: "8px" },
    lastButton: { borderRadius: "8px" }
  }
};

// src/theme/components/tooltip.tsx
var MuiTooltip = {
  defaultProps: { placement: "top" },
  styleOverrides: { tooltip: { backdropFilter: "blur(6px)" } }
};

// src/theme/components/components.ts
var components = {
  MuiAlert,
  MuiAutocomplete,
  MuiAvatar,
  MuiBackdrop,
  MuiButton,
  MuiButtonBase,
  MuiButtonGroup,
  MuiCard,
  MuiCardActions,
  MuiCardContent,
  MuiCardHeader,
  MuiCheckbox,
  MuiChip,
  MuiFilledInput,
  MuiFormControlLabel,
  MuiFormGroup,
  MuiFormLabel,
  MuiIconButton,
  MuiInput,
  MuiInputBase,
  MuiInputLabel,
  MuiLinearProgress,
  MuiLink,
  MuiList,
  MuiListItem,
  MuiListItemAvatar,
  MuiListItemButton,
  MuiListItemIcon,
  MuiListItemText,
  MuiMenu,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiPaper,
  MuiPopover,
  MuiRadio,
  MuiSelect,
  MuiStack,
  MuiSwitch,
  MuiTab,
  MuiTableBody,
  MuiTableCell,
  MuiTableHead,
  MuiTablePagination,
  MuiTabs,
  MuiToggleButton,
  MuiToggleButtonGroup,
  MuiTooltip
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