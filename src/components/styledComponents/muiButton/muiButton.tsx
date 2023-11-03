import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type TMuiButtonProps = PropsWithChildren & {
  disabled?: boolean;
};
export const MUIButton = ({ children, disabled = false }: TMuiButtonProps) => {
  return (
    <Button disabled={disabled} color="primary" variant="contained" type="submit" sx={{ m: 1 }}>
      {children}
    </Button>
  );
};
