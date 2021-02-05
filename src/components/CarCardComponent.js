import React from 'react'
import styled from '@emotion/styled'

const CardContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    :first-child{
        transform: scale(0.5);
        opacity: 0.2;
    }
    :last-child{
        transform: scale(0.5);
        opacity: 0.2;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
        font-size: 3.5rem;
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

const CarCard = ({title, price, image}) => {
    return (
        <CardContainer>
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

export default CarCard
