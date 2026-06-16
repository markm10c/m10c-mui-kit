import { Dialog } from '@mui/material';

type Props = {
  onClose: () => void;
  src: string;
  alt: string;
};

export default function FullScreenMediaModal({ onClose, src, alt }: Props) {
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      fullScreen
      open
      onClose={onClose}
    >
      <img
        onClick={onClose}
        src={src}
        alt={alt}
        style={{ objectFit: 'scale-down' }}
      />
    </Dialog>
  );
}
