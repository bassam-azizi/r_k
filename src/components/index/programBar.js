import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import {keyframes} from '@emotion/react'
import Styled from '@emotion/styled'


const movingText = keyframes`
    0%{margin-left: 100%;}
    100%{margin-left: -180% ;}
`
const Wrapper = Styled.div`
    width: 100%;
    // background-color: #51965722;
    font-size: 14px;
    font-weight: 200;
    color: #373737;

    .container{
        overflow: hidden;
        display: flex;
        align-items: center;
        height: 106px;
        animation: ${movingText} 40s linear infinite;
    }

    .schedule-element{
        display: flex;
        margin: 0 130px;
        white-space: nowrap;
        letter-spacing: .3px;
        h4{
            padding: 0 3px;
        }
    }
    `
    // ul{
    //     animation: ${movingText} 45s linear infinite;
    //     // margin-left: 100%;
    //     display: flex;
    //     flex-wrap: nowrap;
    //     align-items: center;
    //     height: 106px;
    //     overflow: hidden;
    //     li{
    //         padding-right: 250px;
    //         white-space: nowrap;
    //         letter-spacing: .3px;
    //     }
    // }

const ProgramBar = () =>{
    const data = useStaticQuery(graphql`
        query{
            enSchedule : allStrapiSchedule(
                sort:{ fields : [start_time] , order: ASC }
                filter: {
                    locale:{eq : "en"}
                }
            ){
                edges{
                    node{
                        id
                        title
                        title
                        title
                        start_time
                    }
                }
            }
            frSchedule : allStrapiSchedule(
                sort:{ fields : [start_time] , order: ASC }
                filter: {
                    locale:{eq : "en"}
                }
            ){
                edges{
                    node{
                        id
                        title
                        title
                        title
                        start_time
                    }
                }
            }
            arSchedule : allStrapiSchedule(
                sort:{ fields : [start_time] , order: ASC }
                filter: {
                    locale:{eq : "en"}
                }
            ){
                edges{
                    node{
                        id
                        title
                        title
                        title
                        start_time
                    }
                }
            }
        }
    `)
    const strapiSchedule = (locale) =>{
            switch(locale){
                case("fr"):
                    return data.frSchedule;
                case("ar"):
                    return data.arSchedule;
                default:
                    return data.enSchedule;
            }
        }
    return(
        <Wrapper>
            <div className="container">
                {strapiSchedule(useIntl().locale).edges.map(edge=>
                    <div className="schedule-element" key={edge.node.id}>
                        <h4>{edge.node.start_time} - </h4>
                        <h4>{edge.node.title}</h4>
                    </div>
                    )
                }
            </div>
        </Wrapper>
    )
} 

export default ProgramBar