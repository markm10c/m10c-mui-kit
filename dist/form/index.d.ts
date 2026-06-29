import * as react_jsx_runtime from 'react/jsx-runtime';
import { DatePicker } from '@mui/x-date-pickers';
import * as React$1 from 'react';
import { FieldProp } from 'react-typed-form';
import { TextField, Autocomplete, RadioGroup, MenuItem, Stack } from '@mui/material';
import { S as SelectInput, a as SelectWithChip } from '../SelectWithChip-D1Ce5FcO.js';

type PassthroughProps$6 = Omit<React$1.ComponentProps<typeof DatePicker>, 'disabled'>;
type Props$e = PassthroughProps$6 & {
    field: FieldProp<string | null>;
    forceDisabled?: boolean;
    helperText?: string;
};
declare function FieldDate({ field, forceDisabled, onChange, label, helperText, ...rest }: Props$e): react_jsx_runtime.JSX.Element;

type Props$d = {
    field: FieldProp<string | null>;
    forceDisabled?: boolean;
    onChange?: (date: Date) => void;
    label?: string;
    required?: boolean;
    timeFieldWidth?: number;
};
declare function FieldDateTime({ field, forceDisabled, onChange, label, required, timeFieldWidth, }: Props$d): react_jsx_runtime.JSX.Element;

type PassthroughProps$5 = Omit<React$1.ComponentProps<typeof TextField>, 'disabled' | 'onChangeText' | 'value'>;
type Props$c = PassthroughProps$5 & {
    field: FieldProp<string[]>;
    forceDisabled?: boolean;
    onChangeText?: (text: string[]) => void;
};
declare function FieldList({ field, forceDisabled, onChangeText, label, ...rest }: Props$c): react_jsx_runtime.JSX.Element;

type PassthroughProps$4 = Omit<React$1.ComponentProps<typeof Autocomplete<Option>>, 'disabled' | 'onChange' | 'value' | 'renderInput'>;
type Option = {
    label: string;
    value: string;
};
type Props$b = PassthroughProps$4 & {
    field: FieldProp<Array<string>>;
    forceDisabled?: boolean;
    label?: string | null;
    options: Option[];
    required?: boolean;
};
declare function FieldMultiSelect({ field, label, forceDisabled, options, required, }: Props$b): react_jsx_runtime.JSX.Element;

type PassthroughProps$3 = Omit<React$1.ComponentProps<typeof TextField>, 'disabled' | 'onChangeText' | 'value'>;
type Props$a = PassthroughProps$3 & {
    field: FieldProp<number | null>;
    forceDisabled?: boolean;
    helperText?: string;
};
declare function FieldNumber({ field, forceDisabled, label, helperText, ...rest }: Props$a): react_jsx_runtime.JSX.Element;

type Props$9 = Omit<React$1.ComponentProps<typeof FieldNumber>, 'field'> & {
    field: FieldProp<number>;
};
declare const _default$1: React$1.NamedExoticComponent<Props$9>;

type Props$8<T extends string | boolean> = {
    field: FieldProp<T>;
    options: Array<{
        label: string;
        value: T;
    }>;
    label?: string;
    required?: boolean;
    vertical?: boolean;
    disabled?: boolean;
} & Omit<React.ComponentProps<typeof RadioGroup>, 'value' | 'onChange' | 'row'>;
declare function FieldRadioGroup<T extends string | boolean>({ field, options, label, required, vertical, disabled, ...props }: Props$8<T>): react_jsx_runtime.JSX.Element;

type PassthroughProps$2 = Omit<React.ComponentProps<typeof SelectInput>, 'label' | 'labelId' | 'onChange' | 'value'>;
type Props$7 = PassthroughProps$2 & {
    field: FieldProp<string>;
    label?: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    helperText?: string;
};
declare function FieldSelect({ field, label, options, helperText, ...rest }: Props$7): react_jsx_runtime.JSX.Element;

type Choice = {
    value: string | number;
    label: string;
};
type ChipContent = {
    label: string;
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};
type Props$6 = {
    field: FieldProp<string>;
    choices: Choice[];
    getChipContent?: (choice: Choice) => ChipContent | null;
    getMenuItemProps?: (choice: Choice) => React$1.ComponentProps<typeof MenuItem>;
} & Omit<React$1.ComponentProps<typeof SelectWithChip>, 'value' | 'onChange' | 'choices' | 'getChipContent' | 'getMenuItemProps' | 'disabled'>;
declare function FieldSelectWithChip({ field, choices, getChipContent, getMenuItemProps, ...rest }: Props$6): react_jsx_runtime.JSX.Element;

type Props$5 = {
    field: FieldProp<boolean>;
    label?: string;
    forceDisabled?: boolean;
    disabled?: boolean;
    labelPlacement?: 'start' | 'end';
};
declare function FieldSwitch({ field, label, forceDisabled, disabled, labelPlacement, }: Props$5): react_jsx_runtime.JSX.Element;

type PassthroughProps$1 = Omit<React$1.ComponentProps<typeof TextField>, 'disabled' | 'onChangeText' | 'value'>;
type Props$4 = PassthroughProps$1 & {
    field: FieldProp<string | null>;
    containerSx?: React$1.ComponentProps<typeof Stack>['sx'];
    forceDisabled?: boolean;
    hiddenLabel?: boolean;
};
declare function FieldText({ field, forceDisabled, containerSx, hiddenLabel, label, ...rest }: Props$4): react_jsx_runtime.JSX.Element;

type PassthroughProps = Omit<React$1.ComponentProps<typeof FieldText>, 'field'>;
type Props$3 = PassthroughProps & {
    field: FieldProp<string>;
};
/**
 * Duplicate of FieldText, except instead of treating empty input as null, it
 * treats it as empty string.
 */
declare const _default: React$1.NamedExoticComponent<Props$3>;

type Props$2 = {
    field: FieldProp<number | null>;
    label?: string;
};
declare function FieldTime({ field, label }: Props$2): react_jsx_runtime.JSX.Element;

type Props$1 = {
    formErrorList: string[];
    handleSubmit: () => void;
    className?: string;
    children: React$1.ReactNode;
};
declare function FormWrap({ formErrorList, handleSubmit, className, children, }: Props$1): react_jsx_runtime.JSX.Element;

type Props = {
    isLoading: boolean;
    label?: string;
    forceDisabled?: boolean;
};
declare function SubmitButton({ isLoading, label, forceDisabled, }: Props): react_jsx_runtime.JSX.Element;

export { FieldDate, FieldDateTime, FieldList, FieldMultiSelect, FieldNumber, _default$1 as FieldNumberRequired, FieldRadioGroup, FieldSelect, FieldSelectWithChip, FieldSwitch, FieldText, _default as FieldTextRequired, FieldTime, FormWrap, SubmitButton };
