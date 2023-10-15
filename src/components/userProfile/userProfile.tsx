'use client';

import { UserMainInfo } from '@/components/userProfile/userMainInfo';
import { useGetUserMainInfoQuery } from '@/components/userProfile/graphql/getUserMainInfo.gql';

type TUserProfileProps = {
  id: string;
};
export const UserProfile = ({ id }: TUserProfileProps) => {
  const { data, loading } = useGetUserMainInfoQuery({
    variables: {
      id: parseInt(id),
    },
  });
  return loading ? (
    <div>Loading</div>
  ) : data?.getUserInfo ? (
    <UserMainInfo {...data.getUserInfo} />
  ) : (
    <div>{`No such user with id: ${id} `}</div>
  );
};
