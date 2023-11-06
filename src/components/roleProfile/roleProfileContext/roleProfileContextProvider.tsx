'use client';
import { PropsWithChildren } from 'react';
import { RoleProfileContext } from '@/components/roleProfile/roleProfileContext/roleProfileContext';
import { useGetRoleQuery } from '@/components/roleProfile/graphql/GetRole.gql';
import { Box, Typography } from '@mui/material';

type TRoleProfileContextProviderProps = PropsWithChildren & {
  roleId: number;
};

export const RoleProfileContextProvider = ({
  roleId,
  children,
}: TRoleProfileContextProviderProps) => {
  const { data, refetch, loading } = useGetRoleQuery({ variables: { id: roleId } });
  const role = data?.getRoles?.roles?.[0];

  if (loading) {
    return <div>Loading</div>;
  }

  return role ? (
    <RoleProfileContext.Provider
      value={{
        role,
        updateRole: () => {
          refetch();
        },
      }}
    >
      {children}
    </RoleProfileContext.Provider>
  ) : (
    <Box>
      <Typography>{`No such role with id: ${roleId}`}</Typography>
    </Box>
  );
};
