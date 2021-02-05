import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Reactmarkdown from 'react-markdown'
import {keyframes} from '@emotion/react'
import Styled from '@emotion/styled'


const movingText = keyframes`
    0%{margin-left: 100%;}
    100%{margin-left: -300% ;}
`
const Wrapper = Styled.div`
    width: 100%;
    background-color: #51965722;
    font-size: 14px;
    font-weight: 200;
    color: #373737;
    ul{
        animation: ${movingText} 45s linear infinite;
        // margin-left: 100%;
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