import { Box, CircularProgress, Stack, Typography } from '@mui/material';

type Props = {
  message?: string;
};

export default function ScreenLoading({ message }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: '100%',
      }}
    >
      <Stack alignItems="center" spacing={2}>
        <CircularProgress color="primary" size={40} />
        {message && (
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
