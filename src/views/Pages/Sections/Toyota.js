import React, { useState } from 'react'
import styled from '@emotion/styled';
import CarCard from 'components/CarCardComponent';
import Vehicles from '../Vehicles';

const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    margin-left: -20rem;
    animation: slide-in ease-in 0.5s;
    @keyframes slide-in{
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.5;
        }
        80%{
            opacity: 0.8;
        }

        100%{
            opacity: 1;
        }
    }
`;

const Toyota = () => {
    const vehcicles = [
        {
            title: 'Toyota Premio',
            price: '$20,000.00',
            image: 'https://global.toyota/pages/models/images/20191018/kv/premio_ogp_01.jpg'
        },
        {
            title: 'Toyota Camry',
            price: '$20,000.00',
            image: 'https://imgd.aeplcdn.com/1280x720/cw/ec/37561/Toyota-Camry-Right-Front-Three-Quarter-146683.jpg'
        },
        {
            title: 'Toyota Auris',
            price: '$40,000.00',
            image: 'https://cdn.fleetnews.co.uk/web/1/root/auris-toyota.png'
        },
        {
            title: 'Toyota Auris',
            price: '$40,000.00',
            image: 'https://cdn.fleetnews.co.uk/web/1/root/auris-toyota.png'
        },

    ]



    const [selectedIndex, setSelectedIndex] = useState(1);
    return (
        <Container>
            {vehcicles.map((vehicle,index) =>
                <CarCard selected={index === selectedIndex} title={vehicle.title} price={vehicle.price} image={vehicle.image} onClick={()=>setSelectedIndex(index)}/>
            )}
            {/* <CarCard title={"Toyota Camry"} price={"$20,000.00"} image={"https://imgd.aeplcdn.com/1200x900/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg"}/>
            <CarCard title={"Toyota Camry"} price={"$20,000.00"} image={"https://imgd.aeplcdn.com/1280x720/cw/ec/37561/Toyota-Camry-Right-Front-Three-Quarter-146683.jpg"}/>
            <CarCard title={"Toyota Auris"} price={"$40,000.00"} image={"https://cdn.fleetnews.co.uk/web/1/root/auris-toyota.png"}/>
            <CarCard title={"Toyota Auris"} price={"$40,000.00"} image={"https://cdn.fleetnews.co.uk/web/1/root/auris-toyota.png"}/> */}
        </Container>
    )
}

export default Toyota
