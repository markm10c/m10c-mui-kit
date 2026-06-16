import { Stack } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers';
import { formatISO, parseISO } from 'date-fns';
import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';

type PassthroughProps = Omit<
  React.ComponentProps<typeof DatePicker>,
  'disabled'
>;

type Props = PassthroughProps & {
  field: FieldProp<string | null>;
  forceDisabled?: boolean;
  helperText?: string;
};

export default function FieldDate({
  field,
  forceDisabled,
  onChange,
  label,
  helperText,
  ...rest
}: Props) {
  const selectedDate = React.useMemo(() => {
    if (field.value) {
      return parseISO(field.value);
    }
    return null;
  }, [field.value]);
  return (
    <Stack spacing={1}>
      <DatePicker
        label={label ? label : field.label}
        format="dd/MM/yy"
        value={selectedDate}
        disabled={field.isLoading || forceDisabled}
        onChange={(date, context) => {
          const formattedDate = formatISO(date as Date, {
            representation: 'date',
          });
          field.handleValueChange(formattedDate);
          onChange?.(date, context);
        }}
        slotProps={{
          textField: {
            helperText: helperText,
          },
        }}
        {...rest}
      />
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
