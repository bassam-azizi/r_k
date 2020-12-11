import React from 'react'
import Styled from '@emotion/styled'

const LangWrapper = Styled.div`
    display: flex;
    flex-direction: row;
`

const LangP = Styled.p`
    padding: .4rem;
    border: 1px solid #33333320;
    cursor: pointer;
`




const Lang = () =>{
    return(
        <LangWrapper>
            <LangP>AR</LangP>
            <LangP>FR</LangP>
            <LangP>EN</LangP>
        </LangWrapper>
    )
}

export default Lang