import { useRouter } from 'next/navigation';
import { StyledTableItem, StyledTableRow } from '@/components/styledComponents/table/styledTable';

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
      <StyledTableItem>{id}</StyledTableItem>
      <StyledTableItem>{email}</StyledTableItem>
      <StyledTableItem>{fullName}</StyledTableItem>
    </StyledTableRow>
  );
};
