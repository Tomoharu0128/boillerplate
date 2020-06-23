import React from 'react'
import styled from 'styled-components'
import Title from './parts/title'
import Tab from './parts/tab'
import {Link as RouterLink} from 'react-router-dom'

const Root = styled.div`
    width: 100%;
    /* height: 50px; */
    position: relative;
    /* padding-top: 10px; */
    /* padding-left: 10px; */
    /* padding-bottom: 2vh; */
    background-color: black;
    /* @media(min-width: 400px){
        height: 40pxvh;
    } */
`

const Menu = styled.div`
    display: flex;
    justify-content: space-around;
`

const Header = () => {
    return(
        <Root>
            <Title className="title">HomePage</Title>
            <Menu>
                <RouterLink to={'/'}><Tab>Home</Tab></RouterLink>
                <RouterLink to={'/profile'}><Tab>Profile</Tab></RouterLink>
            </Menu>
        </Root>
    )
}

export default Header