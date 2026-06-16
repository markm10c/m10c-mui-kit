import { MenuItem, Stack } from '@mui/material';
import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import { ErrorList, SelectWithChip } from '../components';

type Choice = { value: string | number; label: string };

type ChipContent = {
  label: string;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
};

type Props = {
  field: FieldProp<string>;
  choices: Choice[];
  getChipContent?: (choice: Choice) => ChipContent | null;
  getMenuItemProps?: (choice: Choice) => React.ComponentProps<typeof MenuItem>;
} & Omit<
  React.ComponentProps<typeof SelectWithChip>,
  | 'value'
  | 'onChange'
  | 'choices'
  | 'getChipContent'
  | 'getMenuItemProps'
  | 'disabled'
>;

export default function FieldSelectWithChip({
  field,
  choices,
  getChipContent,
  getMenuItemProps,
  ...rest
}: Props) {
  return (
    <Stack spacing={1}>
      <SelectWithChip
        value={field.value ?? ''}
        onChange={(value) => field.handleValueChange(value)}
        disabled={field.isLoading}
        choices={choices}
        getChipContent={getChipContent}
        getMenuItemProps={getMenuItemProps}
        aria-label={field.label || 'Select'}
        {...rest}
      />
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
