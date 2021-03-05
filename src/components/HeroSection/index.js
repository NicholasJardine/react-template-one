import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import Button from '../ButtonElement'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg> 
                <VideoBg autoPlay loop muted src={Video}type='video/mp4'>

                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Internet Banking Made Easy</HeroH1>
                <HeroP>
                    Create an account today and recieve R500 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true'>Get Started{hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
