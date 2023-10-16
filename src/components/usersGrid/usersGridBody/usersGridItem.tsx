import { useRouter } from 'next/navigation';
import { StyledTableRow } from '@/components/styledComponents/table/styledTable';

export type TUserListItemProps = {
  id: string;
  email: string;
  fullName: string;
};

export const UsersGridItem = ({ id, email, fullName }: TUserListItemProps) => {
  const router = useRouter();
  return (
    <StyledTableRow
      onClick={() => {
        router.push(`/user/${id}`);
      }}
    >
      <td>{id}</td>
      <td>{email}</td>
      <td>{fullName}</td>
    </StyledTableRow>
  );
};
