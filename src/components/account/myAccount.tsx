import {StyledAccount, StyledHeader} from "@/components/styledComponents/account/styledAccount";

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
                <div>{fullName}</div>
                <div>{email}</div>
                <div>{birthDate}</div>
                <div>{phoneNumber}</div>
            </StyledAccount>
        </div>
    )
}