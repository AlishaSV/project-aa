'use client';

import { UsersGrid } from '@/components/usersGrid';
import { StyledUsers } from '@/components/styledComponents/user/styledUsers';
import { NavLink } from '@/components/navbar/navLink';
import { UserPlus } from '@phosphor-icons/react';
import { Box } from '@mui/material';

const Users = () => {
  return (
    <>
      <StyledUsers>Admins</StyledUsers>
      <Box sx={{ textAlign: 'right' }}>
        <NavLink
          title={'Add new user'}
          url={'/addNewAdmin'}
          icon={<UserPlus size={25} color={'#041cd2'} />}
        />
      </Box>
      <UsersGrid />
    </>
  );
};

export default Users;
