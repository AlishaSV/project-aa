import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

type TRemoveUserConfirmationProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onAgree: () => void;
};
export const RemoveUserConfirmation = ({
  open,
  setOpen,
  onAgree,
}: TRemoveUserConfirmationProps) => {
  const handleClose = () => {
    setOpen(false);
  };
  const handleDisagree = () => {
    handleClose();
  };
  const handleAgree = () => {
    onAgree();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ textTransform: 'uppercase' }}>
        remove admin
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to remove this admin?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color={'success'} onClick={handleDisagree}>
          NO
        </Button>
        <Button onClick={handleAgree} color={'error'}>
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
};
