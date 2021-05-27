import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
// import Reactmarkdown from 'react-markdown'
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
            allStrapiSchedule(
                sort:{ fields : [start_time] , order: ASC }
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
    return(
        <Wrapper>
            <div className="container">
                {data.allStrapiSchedule.edges.map(edge=>
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