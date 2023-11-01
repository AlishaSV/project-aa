import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export const MUIButton = ({ children }: PropsWithChildren) => {
  return (
    <Button color="primary" variant="contained" type="submit" sx={{ m: 1 }}>
      {children}
    </Button>
  );
};
