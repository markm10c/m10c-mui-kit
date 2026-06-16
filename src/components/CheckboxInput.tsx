import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
} from '@mui/material';

type Props = {
  label: string;
  checkboxLabel: string;
  labelId: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
};

export default function CheckboxInput({
  label,
  checkboxLabel,
  labelId,
  checked,
  onChange,
  disabled,
  required,
}: Props) {
  return (
    <FormControl required={required}>
      <FormLabel id={labelId}>{label}</FormLabel>
      <FormGroup sx={{ minHeight: 42, justifyContent: 'center' }}>
        <FormControlLabel
          control={
            <Checkbox
              id={labelId}
              checked={checked}
              onChange={(e) => onChange(e.target.checked)}
              disabled={disabled}
            />
          }
          label={checkboxLabel}
        />
      </FormGroup>
    </FormControl>
  );
}
