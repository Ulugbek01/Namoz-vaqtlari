import React from 'react'
import {NavLink} from 'react-router-dom';
import Container from '../../Layout/Container'
import { navbar } from '../../utils/navbar'
import { NavbarSection } from './style';

const Navbar = () => {
  return (
    <NavbarSection>
        <Container className={'navbar-container'}>
            {navbar.map((item) => 
                <NavLink className={'nav-link'} key={item.id} to={item.path}>{item.title}</NavLink>
            )}
        </Container>
    </NavbarSection>
  )
}

export default Navbar