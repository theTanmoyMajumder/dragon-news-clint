import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-dark"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub /> Login with GitHub </Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on:</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaInstagram /> Instagram </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitch /> Twitch </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaWhatsapp /> Whatsapp </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;