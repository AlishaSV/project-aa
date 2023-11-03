import { User } from '@/components/userProfile/graphql/getUserMainInfo.gql';
import { useContext } from '@/components/utils';
import { createContext } from 'react';

type TUserProfileContext = {
  updateUserProfileInfo: () => void;
  userProfileInfo: User;
};

export const UserProfileContext = createContext<TUserProfileContext | null>(null);
UserProfileContext.displayName = 'UserProfileContext';

export const useUserProfileContext = (): TUserProfileContext => {
  return useContext(UserProfileContext);
};
