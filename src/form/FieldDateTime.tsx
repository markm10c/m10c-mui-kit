'use client';

import { Stack } from '@mui/system';
import { DatePicker, TimeField } from '@mui/x-date-pickers';
import { parseISO, set } from 'date-fns';
import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';

type Props = {
  field: FieldProp<string | null>;
  forceDisabled?: boolean;
  onChange?: (date: Date) => void;
  label?: string;
  required?: boolean;
  timeFieldWidth?: number;
};

export default function FieldDateTime({
  field,
  forceDisabled,
  onChange,
  label,
  required,
  timeFieldWidth = 80,
}: Props) {
  const selectedDate = React.useMemo(() => {
    if (field.value) {
      return parseISO(field.value);
    }
    return null;
  }, [field.value]);

  return (
    <Stack direction={'row'} spacing={1} sx={{ width: '100%' }}>
      <DatePicker
        label={`${label ? label : field.label}${required ? ' *' : ''}`}
        format="dd/MM/yyyy"
        sx={{ flex: 1, minWidth: 140 }}
        value={selectedDate}
        disabled={field.isLoading || forceDisabled}
        onChange={(date) => {
          if (selectedDate && date) {
            const updatedDate = set(date, {
              hours: selectedDate.getHours(),
              minutes: selectedDate.getMinutes(),
            });
            onChange?.(updatedDate);
            field.handleValueChange(updatedDate.toISOString());
          } else if (date) {
            onChange?.(date);
            field.handleValueChange(date.toISOString());
          }
        }}
      />
      <TimeField
        label={`Time${required ? ' *' : ''}`}
        value={selectedDate}
        sx={{ width: timeFieldWidth }}
        ampm={false}
        disabled={field.isLoading || forceDisabled}
        onChange={(time) => {
          if (selectedDate && time) {
            const updatedDate = set(selectedDate, {
              hours: time.getHours(),
              minutes: time.getMinutes(),
            });
            onChange?.(updatedDate);
            field.handleValueChange(updatedDate.toISOString());
          }
          if (time) {
            onChange?.(time);
            field.handleValueChange(time.toISOString());
          }
        }}
      />
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
