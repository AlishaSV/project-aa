'use client';

import { StyledButton } from '@/components/styledComponents/common/styledButton';
import { useUserContext } from '@/components/utils';
import { AUTH_LOCAL_STORAGE_KEY } from '@/components/commonConsts';

export const Logout = () => {
  const { setIsUserLoggedIn } = useUserContext();

  return (
    <StyledButton
      onClick={async () => {
        setIsUserLoggedIn(false);
        localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
      }}
    >
      Log out
    </StyledButton>
  );
};
