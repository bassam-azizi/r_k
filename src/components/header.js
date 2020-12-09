import React from 'react'
import { Link } from 'gatsby' 
import styled from  '@emotion/styled'
//import { css } from '@emotion/react'



const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;    
    padding: 0 5rem;
    background-color: red;
    justify-content: space-between;
    align-items: center;
`
const Ul = styled.ul`
    list-style: none;
    display: flex;  
    flex-direction: row;
    padding: 0 1rem;  
    height: auto;
    margin: 0;  
    li{
        padding: 0 2rem;    
    }  
`
const Li = styled.li`
    margin: 0;
`
const Logo = styled.div`
    margin: 0;
`

const Header = () =>{
    return(
        <HeaderContainer>
            <Logo>Logo</Logo>
                <Ul>
                    <Li><Link to='#aboutUs'>About us</Link></Li>
                    <Li><Link to="#program">Program</Link></Li>
                    <Li><Link to="#emission">Emission</Link></Li>
                    <Li><Link to="#contact">Contact </Link></Li>
                </Ul>
                <div>Eng</div>
        </HeaderContainer>
        )
}

export default Header