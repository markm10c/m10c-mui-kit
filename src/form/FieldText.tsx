import { Stack, TextField } from '@mui/material';
import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';

type PassthroughProps = Omit<
  React.ComponentProps<typeof TextField>,
  'disabled' | 'onChangeText' | 'value'
>;

type Props = PassthroughProps & {
  field: FieldProp<string | null>;
  containerSx?: React.ComponentProps<typeof Stack>['sx'];
  forceDisabled?: boolean;
  hiddenLabel?: boolean;
};

export default function FieldText({
  field,
  forceDisabled,
  containerSx,
  hiddenLabel,
  label,
  ...rest
}: Props) {
  return (
    <Stack spacing={1} sx={containerSx}>
      <TextField
        spellCheck={false}
        value={field.value || ''}
        disabled={forceDisabled || field.isLoading}
        hiddenLabel={hiddenLabel}
        label={
          hiddenLabel ? undefined : label !== undefined ? label : field.label
        }
        onChange={(ev) => {
          const text = ev.target.value;
          if (text.trim() === '') {
            field.handleValueChange(null);
            return;
          }
          field.handleValueChange(text);
        }}
        {...rest}
      />
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
