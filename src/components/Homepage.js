import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Homepage = () => {
    return (
        <div>
            <h1>HELLO WELCOME!!!</h1>
            <Container>
                <Row>
    
                    <Col xs={6} md={4}>
                        <Image src="./images/boba.jpeg" roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    )}


export default Homepage