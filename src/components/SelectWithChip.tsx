import { Chip, MenuItem, Select, Stack, Typography } from '@mui/material';
import * as React from 'react';

type Choice = { value: string | number; label: string };

type ChipContent = {
  label: string;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
};

type Props = {
  value: string | number;
  onChange: (value: string) => void;
  choices: Choice[];
  getChipContent?: (choice: Choice) => ChipContent | null;
  getMenuItemProps?: (choice: Choice) => React.ComponentProps<typeof MenuItem>;
  disabled?: boolean;
  placeholder?: string;
  'aria-label'?: string;
} & Omit<React.ComponentProps<typeof Select>, 'value' | 'onChange'>;

export default function SelectWithChip({
  value,
  onChange,
  choices,
  getChipContent,
  getMenuItemProps,
  disabled,
  placeholder,
  'aria-label': ariaLabel,
  ...rest
}: Props) {
  return (
    <Select
      value={value ?? ''}
      onChange={(ev) => onChange(ev.target.value as string)}
      disabled={disabled}
      displayEmpty
      inputProps={{ 'aria-label': ariaLabel || 'Select' }}
      renderValue={(selected) => {
        if (!selected || selected === '') {
          if (placeholder) {
            return (
              <Typography variant="body2" color="text.secondary">
                {placeholder}
              </Typography>
            );
          }
          return null;
        }
        const choice = choices.find((c) => c.value === selected);
        if (!choice) return String(selected);
        const chipContent = getChipContent?.(choice);
        return (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Typography variant="body2">{choice.label}</Typography>
            {chipContent && (
              <Chip
                label={chipContent.label}
                color={chipContent.color || 'default'}
                size="small"
                sx={{ ml: 2, flexShrink: 0 }}
              />
            )}
          </Stack>
        );
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            '& .MuiMenuItem-root': {
              paddingRight: 4,
              minHeight: 48,
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            },
          },
        },
      }}
      sx={{
        '& .MuiSelect-select': {
          paddingY: 1.5,
        },
      }}
      {...rest}
    >
      {choices.map((choice) => {
        const chipContent = getChipContent?.(choice);
        const menuItemProps = getMenuItemProps?.(choice) || {};
        return (
          <MenuItem
            key={choice.label}
            value={choice.value}
            sx={{
              py: 1.5,
              px: 2,
              ...menuItemProps.sx,
            }}
            {...menuItemProps}
          >
            <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <Typography
                variant="body2"
                sx={{
                  flex: 1,
                  minWidth: 0,
                  fontWeight: value === choice.value ? 600 : 400,
                }}
              >
                {choice.label}
              </Typography>
              {chipContent && (
                <Chip
                  label={chipContent.label}
                  color={chipContent.color || 'default'}
                  size="small"
                  sx={{ ml: 2, flexShrink: 0 }}
                />
              )}
            </Stack>
          </MenuItem>
        );
      })}
    </Select>
  );
}
