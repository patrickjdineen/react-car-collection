import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row} from 'react-bootstrap';
import { serverCalls } from '../../api';
import { useHistory } from 'react-router-dom';
import '../../styles.css'

export const Garage = () =>{

    const history:any = useHistory()

    const routeChange = (id?:string, path?:string)=>{
        history.push({
            pathname:path,
            state:{car_id:id}
        })
    }

    let { garageData, getData } = useGetData();
    console.log(garageData)

    const handleDeleteCar = (id:any) =>{
        serverCalls.delete(id);
        console.log(garageData)
        getData()
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Here are your Cars!!!</h1>
                        <Button variant="primary" onClick={ () => routeChange("",'/CreateCar')}>Click Here to Add a New Car</Button>
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

                                    <Button variant="danger" onClick={ () => handleDeleteCar(item.id)}>Delete</Button>
                                    <Button variant="primary" onClick={() => routeChange(item.id,'UpdateCar')}>Update</Button>
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