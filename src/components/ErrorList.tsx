'use client';

import { Stack, Typography } from '@mui/material';

type Props = {
  errors?: string[];
  className?: string;
};

export default function ErrorList({ errors }: Props) {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <Stack spacing={1}>
      {errors.map((errorMessage, i) => (
        <Typography key={i} variant="body2" color="error.main">
          {errorMessage}
        </Typography>
      ))}
    </Stack>
  );
}
