import { TUserListItemProps, UsersGridItem } from './usersGridItem';

type TTableGridBodyProps = {
  users: TUserListItemProps[];
};

export const TableGridBody = ({ users }: TTableGridBodyProps) => {
  return (
    <tbody>
      {users.map((item) => {
        return <UsersGridItem key={item.id} {...item} />;
      })}
    </tbody>
  );
};
