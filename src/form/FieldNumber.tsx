import { Stack, TextField } from '@mui/material';
import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';

type PassthroughProps = Omit<
  React.ComponentProps<typeof TextField>,
  'disabled' | 'onChangeText' | 'value'
>;

type Props = PassthroughProps & {
  field: FieldProp<number | null>;
  forceDisabled?: boolean;
  helperText?: string;
};

export default function FieldNumber({
  field,
  forceDisabled,
  label,
  helperText,
  ...rest
}: Props) {
  return (
    <Stack spacing={1}>
      <TextField
        type="number"
        value={field.value ?? ''}
        disabled={forceDisabled || field.isLoading}
        label={label !== undefined ? label : field.label}
        onChange={(ev) => {
          const text = ev.target.value;
          if (text.trim() === '') {
            field.handleValueChange(null);
            return;
          }
          field.handleValueChange(Number(text));
        }}
        helperText={helperText}
        {...rest}
      />
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
