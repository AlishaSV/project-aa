import {StyledAccount} from "@/components/styledComponents/account/styledAccount";
import {StyledHeader} from "@/components/styledComponents/account/styledHeader";
import {StyledDiv} from "@/components/styledComponents/account/StyledDiv";

type TMyAccount = {
    fullName: string,
    email: string,
    birthDate: string,
    phoneNumber: string
}

export const MyAccount = ({fullName, email, birthDate, phoneNumber}: TMyAccount) => {
    return (
        <div>
            <StyledHeader>
                My Account
            </StyledHeader>
            <StyledAccount>
                <StyledDiv>{fullName}</StyledDiv>
                <StyledDiv>{email}</StyledDiv>
                <StyledDiv>{birthDate}</StyledDiv>
                <StyledDiv>{phoneNumber}</StyledDiv>
            </StyledAccount>
        </div>
    )
}