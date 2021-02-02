import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background:#000;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index: 10;

    @media screen and (max-width:960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    width:100%;
    height:80px;
    display:flex;
    justify-content:space-between;
    z-index: 1;
    max-width: 1100px;
    padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
    color:#fff;
    height:80px;
    display:flex;
    justify-self: flex-start;
    cursor:pointer;
    align-items: center;
    margin-left: 24px;
    font-size:1.5rem;
    font-weight: bold;
    text-decoration: none;
`;


export const MobileIcon = styled.div`
    display:none;
    z-index: 1;
    max-width: 1100px;
    padding: 0 24px;

    @media screen and (max-width:768px) {
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color:#fff;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    margin-right:-22px;
    text-align:center;

    @media screen and (max-width:768px) {
        display:none;
    }
`;


export const NavItem = styled.li`
    height:80px;
    padding: 0 24px;

`;

export const NavLinks = styled(LinkS)`
display:flex;
align-items:center;
text-decoration: none;
height:100%;
cursor:pointer;
color:white;

&.active{
    border-bottom: 3px solid #01bf71;
}
`;


export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px) {
        display:none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background: #01bf71;
    white-space: nowrap;
    padding:10px 22px;
    color: #010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`;
