import CardsFooter from 'components/Footers/CardsFooter';
import DemoNavbar from 'components/Navbars/Navbar'
import React, { useState } from 'react'

import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Carousel
  } from "reactstrap";
import styled from '@emotion/styled';
import { NavLink,BrowserRouter, Route, Switch, useParams  } from 'react-router-dom';
import Toyota from './Sections/Toyota';
import Nissan from './Sections/Nissan';

const SubMenu = styled.nav`
    display: flex;
    justify-content: space-between;

    li{
        list-style-type: none;
    }
`;

const MenuListItem = styled.li`
    font-size: 1.2rem;
    color: red;
    cursor: pointer;

    .selected{
        border-bottom: 2px solid red;
    }
`;

const MenuItem = ({onClick, title, selected}) => {
    return (
        <MenuListItem 
        onClick={onClick}>
            <NavLink activeClassName="selected" to={`/our-vehicles/${title}`}>{title}</NavLink>
            </MenuListItem>
    )
}
const vehicles = ['Nissan', 'Toyota', 'BMW', 'Subaru']
const Vehicles = () => {
    const [indexSelected, setIndexSelected] = useState(0);
    const [selected, setSelected] = useState(false);
    const { id } = useParams();

    const renderSelectedComponent = () => {
        if(id === 'Nissan') return <Nissan/>
        if(id === 'Toyota') return <Toyota/>
        else return <Nissan/>
    }
    return (
        <React.Fragment>
            {console.log("PARAMS ", id)}
            <DemoNavbar/>
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1" style={{backgroundColor:"#3498DB"}}>
                    </div>
                    <Container className="py-lg-md d-flex">
                        <div className="col px-0">
                            <Row>
                                <Col lg="6">
                                    <h1 className="display-3 text-white">Our Fleet</h1>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    
                </section>
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1">
                    </div>
                    <Container className="py-lg-md d-flex">
                        <div className="col px-0">
                            <Row>
                                <Col lg="6">
                                    <SubMenu>
                                        {vehicles.map((vehicle, index) => {
                                        //    if(indexSelected !== index){
                                        //         setIndexSelected();
                                        //    }else{
                                        //        setIndexSelected(-1)
                                        //    }
                                           return <MenuItem title={vehicle}/>
                                        })}
                                    </SubMenu>
                                    {renderSelectedComponent()}
                                </Col>
                                
                            </Row>
                        </div>
                    </Container>
                    
                </section>
            </div>
            <CardsFooter/>
        </React.Fragment>
    )
}

export default Vehicles
