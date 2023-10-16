'use client';

import { useGetAllUsersQuery } from '@/components/usersList/graphql/GetAllUsers.gql';
import { UserListItem } from '@/components/usersList/userListItem';

export const UsersList = () => {
  const { data, loading } = useGetAllUsersQuery();
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>full name</th>
          </tr>
        </thead>
        <tbody>
          {data?.getAllUsers.users.map((item) => {
            return (
              <UserListItem
                key={item.id}
                id={item.id}
                email={item.email}
                fullName={item.fullName}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
