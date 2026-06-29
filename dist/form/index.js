import {
  ErrorList,
  SelectInput,
  SelectWithChip
} from "../chunk-GQNO46MM.js";

// src/form/FieldDate.tsx
import { Stack } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import { formatISO, parseISO } from "date-fns";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function FieldDate({
  field,
  forceDisabled,
  onChange,
  label,
  helperText,
  ...rest
}) {
  const selectedDate = React.useMemo(() => {
    if (field.value) {
      return parseISO(field.value);
    }
    return null;
  }, [field.value]);
  return /* @__PURE__ */ jsxs(Stack, { spacing: 1, children: [
    /* @__PURE__ */ jsx(
      DatePicker,
      {
        label: label ? label : field.label,
        format: "dd/MM/yy",
        value: selectedDate,
        disabled: field.isLoading || forceDisabled,
        onChange: (date, context) => {
          const formattedDate = formatISO(date, {
            representation: "date"
          });
          field.handleValueChange(formattedDate);
          onChange?.(date, context);
        },
        slotProps: {
          textField: {
            helperText
          }
        },
        ...rest
      }
    ),
    /* @__PURE__ */ jsx(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FieldDateTime.tsx
import { Stack as Stack2 } from "@mui/system";
import { DatePicker as DatePicker2, TimeField } from "@mui/x-date-pickers";
import { parseISO as parseISO2, set } from "date-fns";
import * as React2 from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function FieldDateTime({
  field,
  forceDisabled,
  onChange,
  label,
  required,
  timeFieldWidth = 80
}) {
  const selectedDate = React2.useMemo(() => {
    if (field.value) {
      return parseISO2(field.value);
    }
    return null;
  }, [field.value]);
  return /* @__PURE__ */ jsxs2(Stack2, { direction: "row", spacing: 1, sx: { width: "100%" }, children: [
    /* @__PURE__ */ jsx2(
      DatePicker2,
      {
        label: `${label ? label : field.label}${required ? " *" : ""}`,
        format: "dd/MM/yyyy",
        sx: { flex: 1, minWidth: 140 },
        value: selectedDate,
        disabled: field.isLoading || forceDisabled,
        onChange: (date) => {
          if (selectedDate && date) {
            const updatedDate = set(date, {
              hours: selectedDate.getHours(),
              minutes: selectedDate.getMinutes()
            });
            onChange?.(updatedDate);
            field.handleValueChange(updatedDate.toISOString());
          } else if (date) {
            onChange?.(date);
            field.handleValueChange(date.toISOString());
          }
        }
      }
    ),
    /* @__PURE__ */ jsx2(
      TimeField,
      {
        label: `Time${required ? " *" : ""}`,
        value: selectedDate,
        sx: { width: timeFieldWidth },
        ampm: false,
        disabled: field.isLoading || forceDisabled,
        onChange: (time) => {
          if (selectedDate && time) {
            const updatedDate = set(selectedDate, {
              hours: time.getHours(),
              minutes: time.getMinutes()
            });
            onChange?.(updatedDate);
            field.handleValueChange(updatedDate.toISOString());
          }
          if (time) {
            onChange?.(time);
            field.handleValueChange(time.toISOString());
          }
        }
      }
    ),
    /* @__PURE__ */ jsx2(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FieldList.tsx
import { Stack as Stack3, TextField } from "@mui/material";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function FieldList({
  field,
  forceDisabled,
  onChangeText,
  label,
  ...rest
}) {
  const handleTextFieldChange = (event) => {
    const lines = event.target.value.split("\n");
    field.handleValueChange(lines);
  };
  return /* @__PURE__ */ jsxs3(Stack3, { spacing: 1, children: [
    /* @__PURE__ */ jsx3(
      TextField,
      {
        spellCheck: false,
        value: field.value ? field.value.join("\n") : "",
        disabled: forceDisabled || field.isLoading,
        label: label !== void 0 ? label : field.label,
        onChange: handleTextFieldChange,
        rows: 5,
        multiline: true,
        ...rest
      }
    ),
    /* @__PURE__ */ jsx3(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FieldMultiSelect.tsx
import {
  Autocomplete,
  Chip,
  Stack as Stack4,
  TextField as TextField2,
  Typography
} from "@mui/material";
import * as React3 from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
import { createElement } from "react";
function FieldMultiSelect({
  field,
  label,
  forceDisabled,
  options,
  required
}) {
  const [selected, setSelected] = React3.useState([]);
  React3.useEffect(() => {
    if (field.value) {
      let values = [];
      field.value.forEach((value) => {
        const foundOption = options.find((option) => option.value === value);
        if (foundOption) {
          values.push(foundOption);
        }
      });
      setSelected(values);
    }
  }, []);
  const handleSetSelected = (selected2) => {
    setSelected(selected2);
    const values = selected2.map((value) => value.value);
    field.handleValueChange(values);
  };
  const handleRemoveItem = (item) => {
    const newItems = selected.filter((value) => value.value !== item.value);
    setSelected(newItems);
    const values = newItems.map((item2) => item2.value);
    field.handleValueChange(values);
  };
  return /* @__PURE__ */ jsxs4(Stack4, { spacing: 1, children: [
    /* @__PURE__ */ jsx4(
      Autocomplete,
      {
        spellCheck: false,
        multiple: true,
        disabled: field.isLoading || forceDisabled,
        options,
        value: selected,
        getOptionLabel: (option) => option.label,
        onChange: (_, value) => {
          handleSetSelected(value);
        },
        isOptionEqualToValue: (option, value) => option.value === value.value,
        renderOption: (props, option) => /* @__PURE__ */ jsx4(
          Stack4,
          {
            sx: {
              p: 1,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              backgroundColor: (theme) => theme.palette.grey[50]
            },
            children: /* @__PURE__ */ jsx4(Typography, { ...props, children: option.label })
          }
        ),
        renderTags: (value, getTagProps) => {
          return /* @__PURE__ */ jsx4(Stack4, { sx: { py: 1 }, display: "flex", direction: "row", children: value.map((option, index) => /* @__PURE__ */ createElement(
            Chip,
            {
              color: "success",
              ...getTagProps({ index }),
              key: index,
              label: option.label,
              onDelete: () => {
                handleRemoveItem(option);
              }
            }
          )) });
        },
        renderInput: (params) => /* @__PURE__ */ jsx4(
          TextField2,
          {
            ...params,
            label: label || field.label,
            inputProps: {
              ...params.inputProps,
              required: selected.length === 0 && required
            },
            required
          }
        )
      }
    ),
    /* @__PURE__ */ jsx4(ErrorList, { errors: field.errorList })
  ] });
}

// src/form/FieldNumber.tsx
import { Stack as Stack5, TextField as TextField3 } from "@mui/material";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function FieldNumber({
  field,
  forceDisabled,
  label,
  helperText,
  ...rest
}) {
  return /* @__PURE__ */ jsxs5(Stack5, { spacing: 1, children: [
    /* @__PURE__ */ jsx5(
      TextField3,
      {
        type: "number",
        value: field.value ?? "",
        disabled: forceDisabled || field.isLoading,
        label: label !== void 0 ? label : field.label,
        onChange: (ev) => {
          const text = ev.target.value;
          if (text.trim() === "") {
            field.handleValueChange(null);
            return;
          }
          field.handleValueChange(Number(text));
        },
        helperText,
        ...rest
      }
    ),
    /* @__PURE__ */ jsx5(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FieldNumberRequired.tsx
import * as React4 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var FieldNumberRequired_default = React4.memo(function FieldNumberRequired({
  field,
  ...rest
}) {
  return /* @__PURE__ */ jsx6(
    FieldNumber,
    {
      field: {
        ...field,
        value: field.value ?? 0,
        handleValueChange: (value) => field.handleValueChange(value ?? 0)
      },
      ...rest
    }
  );
});

// src/form/FieldRadioGroup.tsx
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack as Stack6
} from "@mui/material";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function FieldRadioGroup({
  field,
  options,
  label,
  required,
  vertical,
  disabled,
  ...props
}) {
  return /* @__PURE__ */ jsx7(FormControl, { children: /* @__PURE__ */ jsxs6(Stack6, { gap: 0.5, children: [
    /* @__PURE__ */ jsx7(FormLabel, { required, children: label ?? field.label }),
    /* @__PURE__ */ jsx7(
      RadioGroup,
      {
        ...props,
        value: String(field.value),
        onChange: (_e, value) => field.handleValueChange(
          value === "true" ? true : value === "false" ? false : value
        ),
        row: !vertical,
        sx: { ml: 1 },
        children: options.map((option) => /* @__PURE__ */ jsx7(
          FormControlLabel,
          {
            control: /* @__PURE__ */ jsx7(Radio, { value: String(option.value) }),
            label: option.label,
            disabled
          },
          String(option.value)
        ))
      }
    ),
    /* @__PURE__ */ jsx7(ErrorList, { errors: field.lastErrorList })
  ] }) });
}

// src/form/FieldSelect.tsx
import { FormHelperText, Stack as Stack7 } from "@mui/material";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function FieldSelect({
  field,
  label,
  options,
  helperText,
  ...rest
}) {
  return /* @__PURE__ */ jsxs7(Stack7, { gap: 1, children: [
    /* @__PURE__ */ jsx8(
      SelectInput,
      {
        label: label ?? field.label,
        options,
        value: field.value ?? "",
        labelId: field.name,
        onChange: field.handleValueChange,
        ...rest
      }
    ),
    helperText && /* @__PURE__ */ jsx8(FormHelperText, { children: helperText }),
    /* @__PURE__ */ jsx8(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FieldSelectWithChip.tsx
import { Stack as Stack8 } from "@mui/material";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function FieldSelectWithChip({
  field,
  choices,
  getChipContent,
  getMenuItemProps,
  ...rest
}) {
  return /* @__PURE__ */ jsxs8(Stack8, { spacing: 1, children: [
    /* @__PURE__ */ jsx9(
      SelectWithChip,
      {
        value: field.value ?? "",
        onChange: (value) => field.handleValueChange(value),
        disabled: field.isLoading,
        choices,
        getChipContent,
        getMenuItemProps,
        "aria-label": field.label || "Select",
        ...rest
      }
    ),
    /* @__PURE__ */ jsx9(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FieldSwitch.tsx
import { FormControlLabel as FormControlLabel2, Stack as Stack9, Switch } from "@mui/material";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function FieldSwitch({
  field,
  label,
  forceDisabled,
  disabled,
  labelPlacement = "start"
}) {
  return /* @__PURE__ */ jsxs9(Stack9, { spacing: 1, alignItems: "flex-start", children: [
    /* @__PURE__ */ jsx10(
      FormControlLabel2,
      {
        control: /* @__PURE__ */ jsx10(
          Switch,
          {
            checked: field.value,
            onChange: (_e, checked) => field.handleValueChange(checked),
            disabled: field.isLoading || forceDisabled || disabled
          }
        ),
        label: label ?? field.label,
        labelPlacement
      }
    ),
    /* @__PURE__ */ jsx10(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FieldText.tsx
import { Stack as Stack10, TextField as TextField4 } from "@mui/material";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function FieldText({
  field,
  forceDisabled,
  containerSx,
  hiddenLabel,
  label,
  ...rest
}) {
  return /* @__PURE__ */ jsxs10(Stack10, { spacing: 1, sx: containerSx, children: [
    /* @__PURE__ */ jsx11(
      TextField4,
      {
        spellCheck: false,
        value: field.value || "",
        disabled: forceDisabled || field.isLoading,
        hiddenLabel,
        label: hiddenLabel ? void 0 : label !== void 0 ? label : field.label,
        onChange: (ev) => {
          const text = ev.target.value;
          if (text.trim() === "") {
            field.handleValueChange(null);
            return;
          }
          field.handleValueChange(text);
        },
        ...rest
      }
    ),
    /* @__PURE__ */ jsx11(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FieldTextRequired.tsx
import * as React5 from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var FieldTextRequired_default = React5.memo(function FieldTextRequired({
  field,
  ...rest
}) {
  return /* @__PURE__ */ jsx12(
    FieldText,
    {
      field,
      onChange: (ev) => {
        field.handleValueChange(ev.target.value);
      },
      ...rest
    }
  );
});

// src/form/FieldTime.tsx
import { Stack as Stack11 } from "@mui/material";
import { TimeField as TimeField2 } from "@mui/x-date-pickers";
import { set as set2 } from "date-fns";
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
function FieldTime({ field, label }) {
  let value = null;
  if (field.value) {
    const hours = Math.floor(field.value / 3600);
    const minutes = Math.floor(field.value % 3600 / 60);
    const seconds = field.value % 60;
    value = set2(/* @__PURE__ */ new Date(), { hours, minutes, seconds });
  }
  return /* @__PURE__ */ jsxs11(Stack11, { spacing: 1, children: [
    /* @__PURE__ */ jsx13(
      TimeField2,
      {
        value,
        label: label ?? field.label,
        inputProps: {
          placeholder: "HH:MM:SS"
        },
        format: "HH:mm:ss",
        onChange: (value2) => {
          if (value2) {
            const hours = value2.getHours();
            const minutes = value2.getMinutes();
            const seconds = value2.getSeconds();
            field.handleValueChange(hours * 3600 + minutes * 60 + seconds);
          }
        }
      }
    ),
    /* @__PURE__ */ jsx13(ErrorList, { errors: field.lastErrorList })
  ] });
}

// src/form/FormWrap.tsx
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
function FormWrap({
  formErrorList,
  handleSubmit,
  className,
  children
}) {
  return /* @__PURE__ */ jsxs12(
    "form",
    {
      className,
      onSubmit: (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        handleSubmit();
      },
      children: [
        children,
        /* @__PURE__ */ jsx14(ErrorList, { errors: formErrorList })
      ]
    }
  );
}

// src/form/SubmitButton.tsx
import { Button } from "@mui/material";
import { jsx as jsx15 } from "react/jsx-runtime";
function SubmitButton({
  isLoading,
  label = "Save",
  forceDisabled
}) {
  return /* @__PURE__ */ jsx15(
    Button,
    {
      type: "submit",
      disabled: isLoading || forceDisabled,
      variant: "contained",
      children: label
    }
  );
}
export {
  FieldDate,
  FieldDateTime,
  FieldList,
  FieldMultiSelect,
  FieldNumber,
  FieldNumberRequired_default as FieldNumberRequired,
  FieldRadioGroup,
  FieldSelect,
  FieldSelectWithChip,
  FieldSwitch,
  FieldText,
  FieldTextRequired_default as FieldTextRequired,
  FieldTime,
  FormWrap,
  SubmitButton
};
//# sourceMappingURL=index.js.map