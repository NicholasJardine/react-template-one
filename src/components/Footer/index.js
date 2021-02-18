import React from 'react'
import{    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>

                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/siginin">Testimonials</FooterLink>
                            <FooterLink to="/siginin">Careers</FooterLink>
                            <FooterLink to="/siginin">Investors</FooterLink>
                            <FooterLink to="/siginin">Terms of Service</FooterLink>
                        </FooterLinkItems>


                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>

                            <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/siginin">Ambassadors</FooterLink>
                            <FooterLink to="/siginin">Agency</FooterLink>
                            <FooterLink to="/siginin">Influencer</FooterLink>
                            <FooterLink to="/siginin">Terms of Service</FooterLink>
                        </FooterLinkItems>


                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>

                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/siginin">Support</FooterLink>
                            <FooterLink to="/siginin">Destinations</FooterLink>
                            <FooterLink to="/siginin">Sponsorships</FooterLink>
                    
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>

                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/siginin">Facebook</FooterLink>
                            <FooterLink to="/siginin">Youtube</FooterLink>
                            <FooterLink to="/siginin">Twitter</FooterLink>
                
                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
