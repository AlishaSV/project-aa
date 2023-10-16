'use client';

import { useGetAllUsersQuery } from '@/components/usersGrid/graphql/GetAllUsers.gql';
import { StyledTable } from '@/components/styledComponents/table/styledTable';
import { UsersGridHeader } from '@/components/usersGrid/usersGridHeader';
import { TableGridBody } from '@/components/usersGrid/usersGridBody';

export const UsersGrid = () => {
  const { data, loading } = useGetAllUsersQuery();
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <StyledTable>
        <UsersGridHeader headerItems={['id', 'email', 'full name']} />
        <TableGridBody users={data?.getAllUsers.users ?? []} />
      </StyledTable>
    </div>
  );
};
