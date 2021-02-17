import React from 'react'
import{    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>

                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/siginin">Testimonials</FooterLink>
                            <FooterLink to="/siginin">Careers</FooterLink>
                            <FooterLink to="/siginin">Investors</FooterLink>
                            <FooterLink to="/siginin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>

                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/siginin">Testimonials</FooterLink>
                            <FooterLink to="/siginin">Careers</FooterLink>
                            <FooterLink to="/siginin">Investors</FooterLink>
                            <FooterLink to="/siginin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>

                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/siginin">Testimonials</FooterLink>
                            <FooterLink to="/siginin">Careers</FooterLink>
                            <FooterLink to="/siginin">Investors</FooterLink>
                            <FooterLink to="/siginin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
