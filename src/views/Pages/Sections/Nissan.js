import React from 'react'
import styled from '@emotion/styled';
import CarCard from 'components/CarCardComponent';


const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    margin-left: -20rem;
`;

const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
`;

const MenuListItem = styled.li`
    list-style-type: none;
    padding: 1.5rem;
    color: white;
    font-size: 1.2rem;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .title{
        margin-bottom: 1.2rem;
        font-size: 0.8rem;
        color: white;
    }
    .mainText{
        font-size: 2rem;
        color: white;
        font-weight: 600;
    }
    .smallText{
        font-size: 0.5rem;
        color: white;
    }
`;
const Nissan = () => {
    const nissanVehicles = [
        {
            title: 'Nissan Ford',
            price: '$20,000.00',
            image: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg'
        },
        {
            title: 'Nissan Ford',
            price: '$20,000.00',
            image: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg'
        },
        {
            title: 'Nissan Ford',
            price: '$20,000.00',
            image: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg'
        },
        {
            title: 'Nissan Ford',
            price: '$20,000.00',
            image: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
      };
    return (
        <Container>
                <CarCard title={"Nissan Ford"} price={"$20,000.00"} image={"https://imgd.aeplcdn.com/1200x900/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg"}/>
                <CarCard title={"Nissan Wolverine"} price={"$20,000.00"} image={"https://imgd.aeplcdn.com/1200x900/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-3.jpeg"}/>
                <CarCard title={"Nissan Navara"} price={"$40,000.00"} image={"https://api-cdn2.stoneacremotorgroup.co.uk/6581726/nissan-navara-main.jpg"}/>
        </Container>
    )
}

export default Nissan
