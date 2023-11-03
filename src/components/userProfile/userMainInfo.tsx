import styled from '@emotion/styled';
import { RemoveUser } from '@/components/userProfile/removeUser';
import { UserMainInfoForm } from '@/components/userProfile/userMainInfoForm';
import { useUserProfileContext } from '@/components/userProfile/userProfileContext';

export const StyledGetUserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserMainInfo = () => {
  const { userProfileInfo } = useUserProfileContext();
  const { id, createdAt, updatedAt } = userProfileInfo;

  function getTimeData(data: Date) {
    return `${data.toDateString()}: ${data.toTimeString()}`;
  }
  return (
    <StyledGetUserMainInfo>
      <RemoveUser id={parseInt(id)} />
      <span>id: {id}</span>

      <span>createdAt: {getTimeData(new Date(parseInt(createdAt)))}</span>
      <span>
        updatedAt: {updatedAt ? getTimeData(new Date(parseInt(updatedAt))) : 'never was updated'}
      </span>

      <UserMainInfoForm />
    </StyledGetUserMainInfo>
  );
};
