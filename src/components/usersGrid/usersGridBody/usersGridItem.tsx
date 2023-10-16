import { useRouter } from 'next/navigation';

export type TUserListItemProps = {
  id: string;
  email: string;
  fullName: string;
};

export const UsersGridItem = ({ id, email, fullName }: TUserListItemProps) => {
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
