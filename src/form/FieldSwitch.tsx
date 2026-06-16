import { FormControlLabel, Stack, Switch } from '@mui/material';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';

type Props = {
  field: FieldProp<boolean>;
  label?: string;
  forceDisabled?: boolean;
  disabled?: boolean;
  labelPlacement?: 'start' | 'end';
};

export default function FieldSwitch({
  field,
  label,
  forceDisabled,
  disabled,
  labelPlacement = 'start',
}: Props) {
  return (
    <Stack spacing={1} alignItems="flex-start">
      <FormControlLabel
        control={
          <Switch
            checked={field.value}
            onChange={(_e, checked) => field.handleValueChange(checked)}
            disabled={field.isLoading || forceDisabled || disabled}
          />
        }
        label={label ?? field.label}
        labelPlacement={labelPlacement}
      />
      <ErrorList errors={field.lastErrorList} />
    </Stack>
  );
}
