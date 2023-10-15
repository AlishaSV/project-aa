import { useRouter } from 'next/navigation';

type TUserListItemProps = {
  id: string;
  email: string;
  fullName: string;
};

export const UserListItem = ({ id, email, fullName }: TUserListItemProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/user/${id}`);
      }}
    >
      <span>{id}:</span>
      <span>{email}:</span>
      <span>{fullName}</span>
    </div>
  );
};
