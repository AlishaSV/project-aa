import { User } from 'mesh';
import styled from '@emotion/styled';
import { RemoveUser } from '@/components/userProfile/removeUser';

type TUserMainInfoProps = User;

export const StyledGetUserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserMainInfo = ({ id, email, fullName, createdAt }: TUserMainInfoProps) => {
  return (
    <StyledGetUserMainInfo>
      <RemoveUser id={parseInt(id)} />
      <ul>
        <li>
          <span>id: {id}</span>
        </li>
        <li>
          <span>email: {email} </span>
        </li>
        <li>
          <span>fullName: {fullName}</span>
        </li>
        <li>
          <span>createdAt: {new Date(parseInt(createdAt)).toDateString()}</span>
        </li>
      </ul>
    </StyledGetUserMainInfo>
  );
};
