import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row} from 'react-bootstrap';

export const Garage = () =>{
    let { garageData, getData } = useGetData();
    console.log(garageData)

    return (
        <Container>
            <h1>Here is your garage!</h1>
        </Container>
    )
}