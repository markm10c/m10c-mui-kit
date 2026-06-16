import { Stack } from '@mui/material';
import { TimeField } from '@mui/x-date-pickers';
import { ErrorList } from '../components';
import { set } from 'date-fns';
import { FieldProp } from 'react-typed-form';

type Props = {
  field: FieldProp<number | null>;
  label?: string;
};

export default function FieldTime({ field, label }: Props) {
  let value: Date | null = null;
  if (field.value) {
    const hours = Math.floor(field.value / 3600);
    const minutes = Math.floor((field.value % 3600) / 60);
    const seconds = field.value % 60;

    value = set(new Date(), { hours, minutes, seconds });
  }

  return (
    <Stack spacing={1}>
      <TimeField
        value={value}
        label={label ?? field.label}
        inputProps={{
          placeholder: 'HH:MM:SS',
        }}
        format="HH:mm:ss"
        onChange={(value) => {
          if (value) {
            const hours = value.getHours();
            const minutes = value.getMinutes();
            const seconds = value.getSeconds();
            field.handleValueChange(hours * 3600 + minutes * 60 + seconds);
          }
        }}
      />
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
