'use client'
import {NavLink, TNavLinkProps} from "@/components/navbar/navLink";
import styled from "@emotion/styled";

type TNavbarProps = {
    links: TNavLinkProps[]
}
export const StyledNavbar = styled.div`
  display: flex;
  gap: 10px;
`;

export const Navbar = ({links}: TNavbarProps) => {
    return (
        <StyledNavbar>
            {links.map((item) =>
                <NavLink key={item.url} {...item}/>
            )}
        </StyledNavbar>
    )
}