import React from 'react'
import styled from 'styled-components'
import Title from './parts/title'
import Tab from './parts/tab'
import {Link as RouterLink} from 'react-router-dom'

const Root = styled.div`
    width: 100vw;
    height: 20vh;
    position: relative;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 2vh;
    background-color: black;
    @media(min-width: 400px){
        height: 15vh;
    }
`

const Header = () => {
    return(
        <Root>
            <Title>HomePage</Title>
            <Tab>
                <RouterLink to={'/'}>Home</RouterLink>
                <RouterLink to={'/profile'}>Profile</RouterLink>
            </Tab>
        </Root>
    )
}

export default Header