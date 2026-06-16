import { Box } from '@mui/material';

type Props = {
  hidden: boolean;
  children: React.ReactNode;
};

export default function TabPanel({ hidden, children }: Props) {
  return (
    <div role="tabpanel" hidden={hidden}>
      {!hidden && <Box>{children}</Box>}
    </div>
  );
}
