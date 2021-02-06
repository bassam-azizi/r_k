import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Reactmarkdown from 'react-markdown'
import {Wrapper, Title, Bars, Bar, Footer} from './scheduleStyle'


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
            <Bars>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </Bars>
            <Title><h1>{data.strapiSchedule.eng_day}</h1></Title>
            <Reactmarkdown source={data.strapiSchedule.eng_body} />
            <Footer>You can watch past shows <Link to='/emission'>here</Link></Footer>
        </Wrapper>

    )
}

export default Schedule 