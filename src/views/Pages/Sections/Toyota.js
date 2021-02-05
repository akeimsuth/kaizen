import React from 'react'
import styled from '@emotion/styled';
import CarCard from 'components/CarCardComponent';

const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    margin-left: -20rem;
`;

const Toyota = () => {
    return (
        <Container>
            <CarCard title={"Toyota Camry"} price={"$20,000.00"} image={"https://imgd.aeplcdn.com/1200x900/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg"}/>
            <CarCard title={"Toyota Camry"} price={"$20,000.00"} image={"https://imgd.aeplcdn.com/1280x720/cw/ec/37561/Toyota-Camry-Right-Front-Three-Quarter-146683.jpg"}/>
            <CarCard title={"Toyota Auris"} price={"$40,000.00"} image={"https://cdn.fleetnews.co.uk/web/1/root/auris-toyota.png"}/>
        </Container>
    )
}

export default Toyota
