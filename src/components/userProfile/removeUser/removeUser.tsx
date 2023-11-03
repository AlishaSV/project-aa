import { useRemoveUserLazyQuery } from './graphql/RemoveUser.gql';
import { useRouter } from 'next/navigation';
import { StyledRemoveUserButton } from '@/components/styledComponents/user/styledRemoveUserButton';
import { useState } from 'react';
import { RemoveUserConfirmation } from '@/components/userProfile/removeUser/removeUserConfirmation';

type TRemoveUserProps = {
  id: number;
};

export const RemoveUser = ({ id }: TRemoveUserProps) => {
  const [removeUserLazyQuery] = useRemoveUserLazyQuery();

  const [open, setOpen] = useState(false);

  const router = useRouter();
  return (
    <>
      <StyledRemoveUserButton
        onClick={async () => {
          setOpen(true);
        }}
      >
        remove
      </StyledRemoveUserButton>
      <RemoveUserConfirmation
        open={open}
        setOpen={setOpen}
        onAgree={async () => {
          const data = await removeUserLazyQuery({ variables: { userId: id } });
          if (data.data?.removeUser) {
            router.push('/users');
          }
        }}
      />
    </>
  );
};
