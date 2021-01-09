import React from 'react'
import Reactmarkdown from 'react-markdown'
import { graphql , useStaticQuery } from 'gatsby'
import Styled from "@emotion/styled"



const Wrapper = Styled.div`
    width : 400px;
    margin: 0 auto;
    padding: 4rem;
    & > div > h1{
        padding: 2rem 0;
    }
    & > ul > li{
        line-height: 40px;
    }
`

const Schedule = () =>{
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
            <div><h1>{data.strapiSchedule.eng_day}</h1></div>
            <Reactmarkdown source={data.strapiSchedule.eng_body} />
        </Wrapper>

    )
}

export default Schedule 