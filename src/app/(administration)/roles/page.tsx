'use client';

import { RolesGrid } from '@/components/rolesGrid/rolesGrid';
import { NavLink } from '@/components/navbar/navLink';
import { UserPlus } from '@phosphor-icons/react';
import { Box } from '@mui/material';

const Roles = () => {
  return (
    <>
      <Box sx={{ textAlign: 'right' }}>
        <NavLink
          title={'Add new role'}
          url={'/addNewRole'}
          icon={<UserPlus size={25} color={'#041cd2'} />}
        />
      </Box>
      <RolesGrid />
    </>
  );
};

export default Roles;
