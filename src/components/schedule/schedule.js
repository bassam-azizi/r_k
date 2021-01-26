import React from 'react'
import { Link } from 'gatsby'
import Reactmarkdown from 'react-markdown'
import { graphql , useStaticQuery } from 'gatsby'
import Styled from "@emotion/styled"



const Wrapper = Styled.div`
    width : 400px;
    margin: 0 auto;
    padding: 4rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-family: Roboto;
    background-color: #e5e5E5 ;
    border: 1px solid #373737 ;
    & > div > h1{
        padding: 2rem 0;
    }
    & > ul > li{
        line-height: 40px;
    }
`
const Title = Styled.div`
    padding: 20px 0;
`
const Bars = Styled.div`
    position: absolute;
    top: -36px;
    height: 60px;
    display: flex;
`
const Bar = Styled.div`
    background-color: red;
    width: 3px;
    margin-right: 16px;
`
const Footer = Styled.div`
    padding: 30px 0;
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