import React from 'react'
import styled from '@emotion/styled'

const CardContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transform: ${props => props.selected ? 'scale(1)': 'scale(0.5)'};
    opacity: ${props => props.selected ? '1': '0.2'};
    cursor: ${props => props.selected ? 'default': 'pointer'};
    transition: all 2s;
    /* :first-child{
        transform: scale(0.5);
        opacity: 0.2;
    }
    :nth-child(3){
        transform: scale(0.5);
        opacity: 0.2;
    } */
    :last-child{
        display: none;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
        font-size: 3.5rem;
        padding-right: 1rem;
    }
    .price{
        font-size: 2.2rem;
        font-weight: bold;
    }
`;

const CardImage = styled.div`
    img{
        object-fit: cover;
        height: 20rem;
    }
`;

const CarItem = ({ title, price, image, selected, onClick }) => {
    return (
        <CardContainer selected={selected} onClick={onClick}>
            <CardHeader>
                <p className="title">{title}</p>
                <p className="price">{price}</p>
                <p>per day</p>
            </CardHeader>
            <CardImage>
                <img src={image} alt="..."/>
            </CardImage>
        </CardContainer>
    )
}

const CarCard = ({title, price, image, selected, onClick}) => {
    return (
        <CarItem title={title} price={price} image={image} selected={selected} onClick={onClick}/>
    )
}

export default CarCard
