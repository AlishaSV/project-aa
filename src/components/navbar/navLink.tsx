import { StyledLink } from '@/components/styledComponents/link/styledLink';
import { ReactElement } from 'react';
import { Tooltip, Typography } from '@mui/material';

export type TNavLinkProps = {
  title: string;
  url: string;
  icon?: ReactElement;
};

export const NavLink = ({ title, url, icon }: TNavLinkProps) => {
  return (
    <StyledLink href={url}>
      {icon ? (
        <Tooltip title={<Typography>{title}</Typography>} placement="bottom">
          {icon}
        </Tooltip>
      ) : (
        title
      )}
    </StyledLink>
  );
};
