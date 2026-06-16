import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import type { ReactNode } from 'react';

type Option = {
  label: string;
  value: string;
  icon?: ReactNode;
};

type Props = {
  label: string;
  value: string;
  labelId: string;
  options: Option[];
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
};

export default function SelectInput({
  label,
  labelId,
  options,
  value,
  onChange,
  required,
  disabled,
}: Props) {
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId} required={required}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.icon ? (
              <Box
                component="span"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box component="span" sx={{ display: 'inline-flex' }}>
                  {option.icon}
                </Box>
                {option.label}
              </Box>
            ) : (
              option.label
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
