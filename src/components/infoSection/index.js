import React from 'react'
import Button from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Heading, Column1, Column2, TextWrapper, Subtitle, BtnWrap, TopLine, ImgWrap, Img} from './InfoElements'


const InfoSection = ({lightBg, img, id, imgStart, description, topLine, lightText, darkText, headline, buttonLabel, alt, primary, dark, dark2 }) => {

    console.log(img);

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
                                            <Button to="home"                                                          smooth={true}
                                                duration={500}
                                                spy={true}
                                                exact="true"
                                                offset={-80}
                                                primary={primary ? 1: 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1: 0}>
                                                {buttonLabel}

                                            </Button>
                                        </BtnWrap>
                        </TextWrapper>
                        
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img.default} alt={alt} />

                            {/* <img src={require ('../../images/10.png')} alt="car" /> */}
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection


// const InfoSection = () => {
//     return (
//         <>
//             <InfoContainer >
//                 <InfoWrapper>

//                     <InfoRow >
//                         <Column1>
//                         <TextWrapper>
//                             <TopLine ></TopLine>
//                             <Heading></Heading>
//                             <Subtitle></Subtitle>
//                                         <BtnWrap>
//                                             <Button to="home">
                                                
//                                             </Button>
//                                         </BtnWrap>
//                         </TextWrapper>
                        
//                         </Column1>
//                         <Column2>
//                         <ImgWrap>
//                             <Img src='../../images/car.jpg'></Img>
//                         </ImgWrap>
//                         </Column2>
//                     </InfoRow>
//                 </InfoWrapper>

//             </InfoContainer>
//         </>
//     )
// }

// export default InfoSection