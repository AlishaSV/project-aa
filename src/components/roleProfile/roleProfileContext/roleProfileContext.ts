'use client';
import { Role } from 'mesh';
import { createContext } from 'react';
import { useContext } from '@/components/utils';

type TRoleProfileContext = {
  role: Role;
  updateRole: () => void;
};

export const RoleProfileContext = createContext<TRoleProfileContext | null>(null);
RoleProfileContext.displayName = 'RoleProfileContext';

export const useRoleProfileContext = (): TRoleProfileContext => {
  return useContext(RoleProfileContext);
};
