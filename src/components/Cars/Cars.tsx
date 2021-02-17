import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row} from 'react-bootstrap';

export const Cars = () =>{
    let { garageData, getData } = useGetData();
    console.log("garage check")
    console.log(garageData)

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Here are your Cars!!!</h1>
                    </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col>
                <div>
                    {garageData.map( (item:any) => (
                        <div key="item.id">
                            <Card style={{width: '18rem'}}>
                                <Card.Body>
                                <Card.Title>
                                        {item.model}
                                    </Card.Title>
                                    <Card.Text>
                                        {item.make}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.color}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>

                                    <Button variant="danger">Delete</Button>
                                    <Button variant="primary">Update</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                </Col>
            </Row>
        </Container>
    )
}