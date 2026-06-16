import { Box, Stack, Typography } from '@mui/material';

type Props = {
  message: string;
  button?: React.ReactNode;
};

export default function ScreenError({ message, button }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Stack alignItems="center" mt={20} spacing={2}>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
        {button && button}
      </Stack>
    </Box>
  );
}
