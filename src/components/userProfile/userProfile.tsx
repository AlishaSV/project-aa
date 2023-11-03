'use client';

import { UserMainInfo } from '@/components/userProfile/userMainInfo';
import { useGetUserMainInfoQuery } from '@/components/userProfile/graphql/getUserMainInfo.gql';
import { UserProfileContextProvider } from '@/components/userProfile/userProfileContext';

type TUserProfileProps = {
  id: string;
};
export const UserProfile = ({ id }: TUserProfileProps) => {
  return (
    <UserProfileContextProvider id={parseInt(id)}>
      <UserMainInfo />
    </UserProfileContextProvider>
  );
};
