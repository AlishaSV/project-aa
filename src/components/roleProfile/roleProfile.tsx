import { RoleInfoForm } from '@/components/roleProfile/roleInfoForm';
import { RoleProfileContextProvider } from '@/components/roleProfile/roleProfileContext';

type TRoleProfileProps = {
  id: string;
};

export const RoleProfile = ({ id }: TRoleProfileProps) => {
  return (
    <RoleProfileContextProvider roleId={parseInt(id)}>
      <RoleInfoForm />
    </RoleProfileContextProvider>
  );
};
