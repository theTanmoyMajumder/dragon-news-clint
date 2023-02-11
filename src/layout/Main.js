import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block' >
                        {/* "d-none" means display none, and it is for not to show this on left side when it on small device. "d-lg-block" means display-large-block and it is for to show stable position in large device */}
                        <LeftSideNav />
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;