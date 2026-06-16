import {
  Autocomplete,
  Chip,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import { ErrorList } from '../components';

type PassthroughProps = Omit<
  React.ComponentProps<typeof Autocomplete<Option>>,
  'disabled' | 'onChange' | 'value' | 'renderInput'
>;

export type Option = {
  label: string;
  value: string;
};

type Props = PassthroughProps & {
  field: FieldProp<Array<string>>;
  forceDisabled?: boolean;
  label?: string | null;
  options: Option[];
  required?: boolean;
};

export default function FieldMultiSelect({
  field,
  label,
  forceDisabled,
  options,
  required,
}: Props) {
  const [selected, setSelected] = React.useState<Array<Option>>([]);

  React.useEffect(() => {
    if (field.value) {
      let values: Option[] = [];
      field.value.forEach((value) => {
        const foundOption = options.find((option) => option.value === value);
        if (foundOption) {
          values.push(foundOption);
        }
      });
      setSelected(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetSelected = (selected: Option[]) => {
    setSelected(selected);
    const values = selected.map((value) => value.value);
    field.handleValueChange(values);
  };

  const handleRemoveItem = (item: Option) => {
    const newItems = selected.filter((value) => value.value !== item.value);
    setSelected(newItems);
    const values = newItems.map((item) => item.value);
    field.handleValueChange(values);
  };

  return (
    <Stack spacing={1}>
      <Autocomplete
        spellCheck={false}
        multiple
        disabled={field.isLoading || forceDisabled}
        options={options}
        value={selected}
        getOptionLabel={(option) => option.label}
        onChange={(_, value) => {
          handleSetSelected(value);
        }}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderOption={(props, option) => (
          <Stack
            sx={{
              p: 1,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              backgroundColor: (theme) => theme.palette.grey[50],
            }}
          >
            <Typography {...props}>{option.label}</Typography>
          </Stack>
        )}
        renderTags={(value, getTagProps) => {
          return (
            <Stack sx={{ py: 1 }} display="flex" direction="row">
              {value.map((option, index) => (
                <Chip
                  color="success"
                  {...getTagProps({ index })}
                  key={index}
                  label={option.label}
                  onDelete={() => {
                    handleRemoveItem(option);
                  }}
                />
              ))}
            </Stack>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label || field.label}
            inputProps={{
              ...params.inputProps,
              required: selected.length === 0 && required,
            }}
            required={required}
          />
        )}
      />
      <ErrorList errors={field.errorList} />
    </Stack>
  );
}
