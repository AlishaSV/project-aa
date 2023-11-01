import { useRemoveUserLazyQuery } from './graphql/RemoveUser.gql';
import { useRouter } from 'next/navigation';
import { StyledRemoveUserButton } from '@/components/styledComponents/user/styledRemoveUserButton';

type TRemoveUserProps = {
  id: number;
};

export const RemoveUser = ({ id }: TRemoveUserProps) => {
  const [removeUserLazyQuery] = useRemoveUserLazyQuery();
  const router = useRouter();
  return (
    <StyledRemoveUserButton
      onClick={async () => {
        const data = await removeUserLazyQuery({ variables: { userId: id } });
        if (data.data?.removeUser) {
          router.push('/users');
        }
      }}
    >
      remove
    </StyledRemoveUserButton>
  );
};
