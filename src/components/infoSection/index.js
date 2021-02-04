import React from 'react'
import Button from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Heading, Column1, Column2, TextWrapper, Subtitle, BtnWrap, TopLine, ImgWrap, Img} from './InfoElements'


const InfoSection = ({lightBg, img, id, imgStart, description, topLine, lightText, darkText, headline, buttonLabel, alt }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>

                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine lightText={lightText}>{topLine}</TopLine>
                            <Heading>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                                        <BtnWrap>
                                            <Button to="home">
                                                {buttonLabel}
                                            </Button>
                                        </BtnWrap>
                        </TextWrapper>
                        
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}></Img>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection
