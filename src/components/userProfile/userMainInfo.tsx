import { MainTypes } from 'mesh/sources/main/types';
import styled from '@emotion/styled';

type TUserMainInfoProps = MainTypes.User;

export const StyledGetUserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserMainInfo = ({ id, email, fullName, createdAt }: TUserMainInfoProps) => {
  return (
    <StyledGetUserMainInfo>
      <ul>
        <li>
          <span>id: {id}</span>
        </li>
        <li>
          <span>email: {email}</span>
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
