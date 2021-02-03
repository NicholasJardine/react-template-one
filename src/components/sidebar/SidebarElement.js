import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'


   /* opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; */

export const SidebarContainer = styled.aside`
    width:100%;
    height:100%;
    display:grid;
    align-items:center;
    z-index: 999;
    position:fixed;
    background: #0d0d0d;
    top:0;
    left:0;
    transition: 0.3s aease-in-and-out;
    top:0;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;


export const Icon = styled.div`
    position:absolute;
    top:1.25rem;
    right: 1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline: none;
`;