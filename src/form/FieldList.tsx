import { Stack, TextField } from '@mui/material';
import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';

type PassthroughProps = Omit<
  React.ComponentProps<typeof TextField>,
  'disabled' | 'onChangeText' | 'value'
>;

type Props = PassthroughProps & {
  field: FieldProp<string[]>;
  forceDisabled?: boolean;
  onChangeText?: (text: string[]) => void;
};

export default function FieldList({
  field,
  forceDisabled,
  onChangeText,
  label,
  ...rest
}: Props) {
  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const lines = event.target.value.split('\n');
    field.handleValueChange(lines);
  };
  return (
    <Stack spacing={1}>
      <TextField
        spellCheck={false}
        value={field.value ? field.value.join('\n') : ''}
        disabled={forceDisabled || field.isLoading}
        label={label !== undefined ? label : field.label}
        onChange={handleTextFieldChange}
        rows={5}
        multiline
        {...rest}
      />
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
