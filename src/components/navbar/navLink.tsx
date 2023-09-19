import {StyledLink} from "@/components/styledComponents/link/styledLink";

export type TNavLinkProps = {
    title: string,
    url: string
}

export const NavLink = ({title, url}: TNavLinkProps) => {
    return (
        <StyledLink href={url}>{title}</StyledLink>
    )
}