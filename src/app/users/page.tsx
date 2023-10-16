import { UsersGrid } from '@/components/usersGrid';
import { StyledUsers } from '@/components/styledComponents/user/styledUsers';

const Users = () => {
  return (
    <>
      <StyledUsers>Admins</StyledUsers>
      <UsersGrid />
    </>
  );
};

export default Users;
