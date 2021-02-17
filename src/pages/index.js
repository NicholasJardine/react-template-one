import React , {useState} from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infoSection/data';
import Services from '../components/Services';
import Footer from '../components/Footer';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 

        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
        <Navbar toggle={toggle} />
        <HeroSection></HeroSection>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services></Services>
        <InfoSection {...homeObjThree} />
        <Footer/>
        </>
    )
}

export default Home
