import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Reactmarkdown from 'react-markdown'
import {Wrapper, Bars } from './scheduleStyle'


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
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </Bars>
            <div className="container">
                <div className="title">
                    <h1>Today programme</h1>
                    <p>{data.strapiSchedule.eng_day}</p>
                </div>
                <Reactmarkdown source={data.strapiSchedule.eng_body} />
                <div className="footer">
                    You can watch past shows <Link to='/emission'>here</Link>
                </div>
            </div>
        </Wrapper>

    )
}

export default Schedule 