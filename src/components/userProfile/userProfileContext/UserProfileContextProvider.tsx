import { PropsWithChildren } from 'react';
import { UserProfileContext } from '@/components/userProfile/userProfileContext/userProfileContext';
import { useGetUserMainInfoQuery } from '@/components/userProfile/graphql/getUserMainInfo.gql';

type TUserProfileContextProviderProps = PropsWithChildren & {
  id: number;
};

export const UserProfileContextProvider = ({ children, id }: TUserProfileContextProviderProps) => {
  const { data, loading, refetch } = useGetUserMainInfoQuery({
    variables: {
      id,
    },
  });

  if (loading) {
    return <div>Loading</div>;
  }

  return data?.getUserInfo ? (
    <UserProfileContext.Provider
      value={{
        userProfileInfo: data?.getUserInfo,
        updateUserProfileInfo: () => {
          refetch();
        },
      }}
    >
      {children}
    </UserProfileContext.Provider>
  ) : (
    <div>{`No such user with id: ${id} `}</div>
  );
};
