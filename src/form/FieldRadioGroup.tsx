import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';

type Props<T extends string | boolean> = {
  field: FieldProp<T>;
  options: Array<{ label: string; value: T }>;
  label?: string;
  required?: boolean;
  vertical?: boolean;
  disabled?: boolean;
} & Omit<
  React.ComponentProps<typeof RadioGroup>,
  'value' | 'onChange' | 'row'
>;

export default function FieldRadioGroup<T extends string | boolean>({
  field,
  options,
  label,
  required,
  vertical,
  disabled,
  ...props
}: Props<T>) {
  return (
    <FormControl>
      <Stack gap={0.5}>
        <FormLabel required={required}>{label ?? field.label}</FormLabel>
        <RadioGroup
          {...props}
          value={String(field.value)}
          onChange={(_e, value) =>
            field.handleValueChange(
              (value === 'true'
                ? true
                : value === 'false'
                  ? false
                  : value) as T,
            )
          }
          row={!vertical}
          sx={{ ml: 1 }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={String(option.value)}
              control={<Radio value={String(option.value)} />}
              label={option.label}
              disabled={disabled}
            />
          ))}
        </RadioGroup>
        <ErrorList errors={field.lastErrorList} />
      </Stack>
    </FormControl>
  );
}
