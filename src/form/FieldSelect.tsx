import { FormHelperText, Stack } from '@mui/material';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';
import SelectInput from '../components/SelectInput';

type PassthroughProps = Omit<
  React.ComponentProps<typeof SelectInput>,
  'label' | 'labelId' | 'onChange' | 'value'
>;

type Props = PassthroughProps & {
  field: FieldProp<string>;
  label?: string;
  options: Array<{ label: string; value: string }>;
  helperText?: string;
};

export default function FieldSelect({
  field,
  label,
  options,
  helperText,
  ...rest
}: Props) {
  return (
    <Stack gap={1}>
      <SelectInput
        label={label ?? field.label}
        options={options}
        value={field.value ?? ''}
        labelId={field.name}
        onChange={field.handleValueChange}
        {...rest}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
