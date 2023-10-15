'use client';

import { useGetAllUsersQuery } from '@/components/usersList/graphql/GetAllUsers.gql';
import { UserListItem } from '@/components/usersList/userListItem';

export const UsersList = () => {
  const { data, loading } = useGetAllUsersQuery();
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <ul>
        {data?.getAllUsers.users.map((item) => {
          return (
            <li key={item.id}>
              <UserListItem id={item.id} email={item.email} fullName={item.fullName} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
