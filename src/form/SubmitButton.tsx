import { Button } from '@mui/material';

type Props = {
  isLoading: boolean;
  label?: string;
  forceDisabled?: boolean;
};

export default function SubmitButton({
  isLoading,
  label = 'Save',
  forceDisabled,
}: Props) {
  return (
    <Button
      type="submit"
      disabled={isLoading || forceDisabled}
      variant="contained"
    >
      {label}
    </Button>
  );
}
