'use client';

import { UsersGrid } from '@/components/usersGrid';
import { StyledUsers } from '@/components/styledComponents/user/styledUsers';
import { AddNewAdmin } from '@/components/addNewUser/addNewAdmin';
import { StyledAddNewUser } from '@/components/styledComponents/user/styledAddNewUser';

const Users = () => {
  return (
    <>
      <StyledUsers>Admins</StyledUsers>
      <StyledAddNewUser>
        <AddNewAdmin />
      </StyledAddNewUser>
      <UsersGrid />
    </>
  );
};

export default Users;
