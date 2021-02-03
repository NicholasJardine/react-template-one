import React , {useState} from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 

        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
        <Navbar toggle={toggle} />
        
        </>
    )
}

export default Home
