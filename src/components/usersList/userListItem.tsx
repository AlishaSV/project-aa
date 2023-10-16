import { useRouter } from 'next/navigation';

type TUserListItemProps = {
  id: string;
  email: string;
  fullName: string;
};

export const UserListItem = ({ id, email, fullName }: TUserListItemProps) => {
  const router = useRouter();
  return (
    <tr
      onClick={() => {
        router.push(`/user/${id}`);
      }}
    >
      <td>{id}</td>
      <td>{email}</td>
      <td>{fullName}</td>
    </tr>
  );
};
