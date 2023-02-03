import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-dark"> <FaGoogle /> Login with Google</Button>
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