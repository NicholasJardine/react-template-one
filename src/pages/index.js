import React , {useState} from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection'
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
        </>
    )
}

export default Home
