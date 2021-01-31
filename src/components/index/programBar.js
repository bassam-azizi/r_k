import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Reactmarkdown from 'react-markdown'
import styled, {keyframes} from '@emotion/react'


const movingText = keyframes`
    0%{translateX(0)}
    50%{translateX: -80vw;}
    100%{translateX: 0}
`
const Wrapper = styled.div`
    width: 100vw;
    background-color: #51965722;
    font-size: 14px;
    font-weight: 200;
    color: #373737;
    ul{
        animation-name: ${movingText};
        animation-duration: 9s;
        animation-iteration-count: infinite;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        height: 106px;
        overflow: hidden;
        li{
            padding-right: 250px;
            white-space: nowrap;
            letter-spacing: .3px;
        }
    }
    `

const ProgramBar = () =>{
    const data = useStaticQuery(graphql`
    query{
        strapiSchedule{
            id
            Slug
            eng_day
            eng_body
          }
    }
    `)
    return(
        <Wrapper>
            <Reactmarkdown source={data.strapiSchedule.eng_body} />
        </Wrapper>
    )
} 

export default ProgramBar