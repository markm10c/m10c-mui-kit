import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ReactNode } from 'react';
import { MenuItem, Select } from '@mui/material';

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
    interface PaletteColor {
        activated: string;
    }
    interface SimplePaletteColorOptions {
        activated?: string;
    }
    interface Palette {
        neutral: PaletteRange;
        shadow: string;
        TableCell: {
            border: string;
        };
    }
    interface PaletteOptions {
        neutral?: PaletteRange;
        shadow?: string;
        TableCell?: {
            border?: string;
        };
    }
    interface TypeBackground {
        level1: string;
        level2: string;
        level3: string;
    }
}

type Option = {
    label: string;
    value: string;
    icon?: ReactNode;
};
type Props$1 = {
    label: string;
    value: string;
    labelId: string;
    options: Option[];
    onChange: (value: string) => void;
    required?: boolean;
    disabled?: boolean;
};
declare function SelectInput({ label, labelId, options, value, onChange, required, disabled, }: Props$1): react_jsx_runtime.JSX.Element;

type Choice = {
    value: string | number;
    label: string;
};
type ChipContent = {
    label: string;
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};
type Props = {
    value: string | number;
    onChange: (value: string) => void;
    choices: Choice[];
    getChipContent?: (choice: Choice) => ChipContent | null;
    getMenuItemProps?: (choice: Choice) => React.ComponentProps<typeof MenuItem>;
    disabled?: boolean;
    placeholder?: string;
    'aria-label'?: string;
} & Omit<React.ComponentProps<typeof Select>, 'value' | 'onChange'>;
declare function SelectWithChip({ value, onChange, choices, getChipContent, getMenuItemProps, disabled, placeholder, 'aria-label': ariaLabel, ...rest }: Props): react_jsx_runtime.JSX.Element;

export { SelectInput as S, SelectWithChip as a };
