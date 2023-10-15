'use client';
import { StyledAccount } from '@/components/styledComponents/account/styledAccount';
import { StyledHeader } from '@/components/styledComponents/account/styledHeader';
import { StyledDiv } from '@/components/styledComponents/account/StyledDiv';
import { useGetUserInfoQuery } from '@/components/account/graphql/GetUserInfo.gql';

type TMyAccount = {
  fullName: string;
  email: string;
  birthDate: string;
  phoneNumber: string;
};

export const MyAccount = ({ fullName, email, birthDate, phoneNumber }: TMyAccount) => {
  const { data, loading } = useGetUserInfoQuery();

  return (
    <div>
      <StyledHeader>My Account</StyledHeader>
      {loading ? (
        <StyledDiv>loading...</StyledDiv>
      ) : (
        data && (
          <StyledAccount>
            <StyledDiv>{data.getUserInfo.fullName}</StyledDiv>
            <StyledDiv>{data.getUserInfo.email}</StyledDiv>
            <StyledDiv>{birthDate}</StyledDiv>
            <StyledDiv>{phoneNumber}</StyledDiv>
          </StyledAccount>
        )
      )}
    </div>
  );
};
