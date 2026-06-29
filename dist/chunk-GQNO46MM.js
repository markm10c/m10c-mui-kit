// src/components/CheckboxInput.tsx
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel
} from "@mui/material";
import { jsx, jsxs } from "react/jsx-runtime";
function CheckboxInput({
  label,
  checkboxLabel,
  labelId,
  checked,
  onChange,
  disabled,
  required
}) {
  return /* @__PURE__ */ jsxs(FormControl, { required, children: [
    /* @__PURE__ */ jsx(FormLabel, { id: labelId, children: label }),
    /* @__PURE__ */ jsx(FormGroup, { sx: { minHeight: 42, justifyContent: "center" }, children: /* @__PURE__ */ jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: labelId,
            checked,
            onChange: (e) => onChange(e.target.checked),
            disabled
          }
        ),
        label: checkboxLabel
      }
    ) })
  ] });
}

// src/components/ErrorList.tsx
import { Stack, Typography } from "@mui/material";
import { jsx as jsx2 } from "react/jsx-runtime";
function ErrorList({ errors }) {
  if (!errors || errors.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx2(Stack, { spacing: 1, children: errors.map((errorMessage, i) => /* @__PURE__ */ jsx2(Typography, { variant: "body2", color: "error.main", children: errorMessage }, i)) });
}

// src/components/FullScreenMediaModal.tsx
import { Dialog } from "@mui/material";
import { jsx as jsx3 } from "react/jsx-runtime";
function FullScreenMediaModal({ onClose, src, alt }) {
  return /* @__PURE__ */ jsx3(
    Dialog,
    {
      sx: {
        "& .MuiDialog-paper": {
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      fullScreen: true,
      open: true,
      onClose,
      children: /* @__PURE__ */ jsx3(
        "img",
        {
          onClick: onClose,
          src,
          alt,
          style: { objectFit: "scale-down" }
        }
      )
    }
  );
}

// src/components/PropertyListItem.tsx
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography2 from "@mui/material/Typography";
import { jsx as jsx4 } from "react/jsx-runtime";
var PropertyListItem = (props) => {
  const { align = "vertical", children, disableGutters, value, label, ...other } = props;
  return /* @__PURE__ */ jsx4(
    ListItem,
    {
      sx: {
        px: disableGutters ? 0 : 3,
        py: 1.5
      },
      ...other,
      children: /* @__PURE__ */ jsx4(
        ListItemText,
        {
          disableTypography: true,
          primary: /* @__PURE__ */ jsx4(
            Typography2,
            {
              sx: { minWidth: align === "vertical" ? "inherit" : 180 },
              variant: "subtitle2",
              children: label
            }
          ),
          secondary: /* @__PURE__ */ jsx4(
            Box,
            {
              sx: {
                flex: 1,
                mt: align === "vertical" ? 0.5 : 0
              },
              children: children || /* @__PURE__ */ jsx4(
                Typography2,
                {
                  color: "text.secondary",
                  variant: "body2",
                  children: value
                }
              )
            }
          ),
          sx: {
            display: "flex",
            flexDirection: align === "vertical" ? "column" : "row",
            my: 0
          }
        }
      )
    }
  );
};
var PropertyListItem_default = PropertyListItem;

// src/components/PublishState.tsx
import { Chip } from "@mui/material";
import { format, isBefore, parseISO } from "date-fns";
import { jsx as jsx5 } from "react/jsx-runtime";
function PublishState({
  item
}) {
  const dateFormat = "dd MMM yyyy, HH:mm";
  if (item.publishAt) {
    const publishDate = parseISO(item.publishAt);
    if (isBefore(/* @__PURE__ */ new Date(), publishDate)) {
      return /* @__PURE__ */ jsx5(
        Chip,
        {
          label: format(parseISO(item.publishAt), dateFormat),
          color: "info"
        }
      );
    }
    return /* @__PURE__ */ jsx5(
      Chip,
      {
        label: format(parseISO(item.publishAt), dateFormat),
        color: "success"
      }
    );
  }
  return /* @__PURE__ */ jsx5(Chip, { label: "Draft", color: "warning" });
}

// src/components/ScreenError.tsx
import { Box as Box2, Stack as Stack2, Typography as Typography3 } from "@mui/material";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function ScreenError({ message, button }) {
  return /* @__PURE__ */ jsx6(
    Box2,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
      },
      children: /* @__PURE__ */ jsxs2(Stack2, { alignItems: "center", mt: 20, spacing: 2, children: [
        /* @__PURE__ */ jsx6(Typography3, { variant: "body2", color: "text.secondary", children: message }),
        button && button
      ] })
    }
  );
}

// src/components/ScreenLoading.tsx
import { Box as Box3, CircularProgress, Stack as Stack3, Typography as Typography4 } from "@mui/material";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function ScreenLoading({ message }) {
  return /* @__PURE__ */ jsx7(
    Box3,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        height: "100%"
      },
      children: /* @__PURE__ */ jsxs3(Stack3, { alignItems: "center", spacing: 2, children: [
        /* @__PURE__ */ jsx7(CircularProgress, { color: "primary", size: 40 }),
        message && /* @__PURE__ */ jsx7(Typography4, { variant: "body2", color: "text.secondary", children: message })
      ] })
    }
  );
}

// src/components/SelectInput.tsx
import { Box as Box4, FormControl as FormControl2, InputLabel, MenuItem, Select } from "@mui/material";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function SelectInput({
  label,
  labelId,
  options,
  value,
  onChange,
  required,
  disabled
}) {
  return /* @__PURE__ */ jsxs4(FormControl2, { fullWidth: true, children: [
    /* @__PURE__ */ jsx8(InputLabel, { id: labelId, required, children: label }),
    /* @__PURE__ */ jsx8(
      Select,
      {
        labelId,
        value,
        label,
        onChange: (e) => onChange(e.target.value),
        disabled,
        children: options.map((option) => /* @__PURE__ */ jsx8(MenuItem, { value: option.value, children: option.icon ? /* @__PURE__ */ jsxs4(
          Box4,
          {
            component: "span",
            sx: {
              display: "inline-flex",
              alignItems: "center",
              gap: 1
            },
            children: [
              /* @__PURE__ */ jsx8(Box4, { component: "span", sx: { display: "inline-flex" }, children: option.icon }),
              option.label
            ]
          }
        ) : option.label }, option.value))
      }
    )
  ] });
}

// src/components/SelectWithChip.tsx
import { Chip as Chip2, MenuItem as MenuItem2, Select as Select2, Stack as Stack4, Typography as Typography5 } from "@mui/material";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
function SelectWithChip({
  value,
  onChange,
  choices,
  getChipContent,
  getMenuItemProps,
  disabled,
  placeholder,
  "aria-label": ariaLabel,
  ...rest
}) {
  return /* @__PURE__ */ jsx9(
    Select2,
    {
      value: value ?? "",
      onChange: (ev) => onChange(ev.target.value),
      disabled,
      displayEmpty: true,
      inputProps: { "aria-label": ariaLabel || "Select" },
      renderValue: (selected) => {
        if (!selected || selected === "") {
          if (placeholder) {
            return /* @__PURE__ */ jsx9(Typography5, { variant: "body2", color: "text.secondary", children: placeholder });
          }
          return null;
        }
        const choice = choices.find((c) => c.value === selected);
        if (!choice) return String(selected);
        const chipContent = getChipContent?.(choice);
        return /* @__PURE__ */ jsxs5(
          Stack4,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: { width: "100%" },
            children: [
              /* @__PURE__ */ jsx9(Typography5, { variant: "body2", children: choice.label }),
              chipContent && /* @__PURE__ */ jsx9(
                Chip2,
                {
                  label: chipContent.label,
                  color: chipContent.color || "default",
                  size: "small",
                  sx: { ml: 2, flexShrink: 0 }
                }
              )
            ]
          }
        );
      },
      MenuProps: {
        PaperProps: {
          sx: {
            "& .MuiMenuItem-root": {
              paddingRight: 4,
              minHeight: 48,
              "&:hover": {
                backgroundColor: "action.hover"
              }
            }
          }
        }
      },
      sx: {
        "& .MuiSelect-select": {
          paddingY: 1.5
        }
      },
      ...rest,
      children: choices.map((choice) => {
        const chipContent = getChipContent?.(choice);
        const menuItemProps = getMenuItemProps?.(choice) || {};
        return /* @__PURE__ */ jsx9(
          MenuItem2,
          {
            value: choice.value,
            sx: {
              py: 1.5,
              px: 2,
              ...menuItemProps.sx
            },
            ...menuItemProps,
            children: /* @__PURE__ */ jsxs5(
              Stack4,
              {
                justifyContent: "space-between",
                direction: "row",
                alignItems: "center",
                sx: { width: "100%" },
                children: [
                  /* @__PURE__ */ jsx9(
                    Typography5,
                    {
                      variant: "body2",
                      sx: {
                        flex: 1,
                        minWidth: 0,
                        fontWeight: value === choice.value ? 600 : 400
                      },
                      children: choice.label
                    }
                  ),
                  chipContent && /* @__PURE__ */ jsx9(
                    Chip2,
                    {
                      label: chipContent.label,
                      color: chipContent.color || "default",
                      size: "small",
                      sx: { ml: 2, flexShrink: 0 }
                    }
                  )
                ]
              }
            )
          },
          choice.label
        );
      })
    }
  );
}

// src/components/SeverityPill.tsx
import { styled } from "@mui/material/styles";
import { jsx as jsx10 } from "react/jsx-runtime";
var SeverityPillRoot = styled("span")(
  ({ theme, ownerState }) => {
    const backgroundColor = theme.palette[ownerState.color].activated;
    const color = theme.palette.mode === "dark" ? theme.palette[ownerState.color].main : theme.palette[ownerState.color].dark;
    return {
      alignItems: "center",
      backgroundColor,
      borderRadius: 12,
      color,
      cursor: "default",
      display: "inline-flex",
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 2,
      fontWeight: 600,
      justifyContent: "center",
      letterSpacing: 0.5,
      minWidth: 20,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    };
  }
);
var SeverityPill = (props) => {
  const { color = "primary", children, ...other } = props;
  const ownerState = { color };
  return /* @__PURE__ */ jsx10(SeverityPillRoot, { ownerState, ...other, children });
};

// src/components/TabPanel.tsx
import { Box as Box5 } from "@mui/material";
import { jsx as jsx11 } from "react/jsx-runtime";
function TabPanel({ hidden, children }) {
  return /* @__PURE__ */ jsx11("div", { role: "tabpanel", hidden, children: !hidden && /* @__PURE__ */ jsx11(Box5, { children }) });
}

// src/components/Toaster.tsx
import { Toaster as HotToaster } from "react-hot-toast";
import { alpha } from "@mui/system/colorManipulator";
import { useTheme } from "@mui/material/styles";
import { jsx as jsx12 } from "react/jsx-runtime";
var Toaster = () => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx12(
    HotToaster,
    {
      position: "bottom-right",
      toastOptions: {
        style: {
          backdropFilter: "blur(6px)",
          background: alpha(theme.palette.neutral[900], 0.8),
          color: theme.palette.common.white,
          boxShadow: theme.shadows[16]
        }
      }
    }
  );
};

export {
  CheckboxInput,
  ErrorList,
  FullScreenMediaModal,
  PropertyListItem_default,
  PublishState,
  ScreenError,
  ScreenLoading,
  SelectInput,
  SelectWithChip,
  SeverityPill,
  TabPanel,
  Toaster
};
//# sourceMappingURL=chunk-GQNO46MM.js.map