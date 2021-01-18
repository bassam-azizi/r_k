import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Timer from './timer'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { CgMediaLive } from 'react-icons/all'


import Styled from '@emotion/styled'


const Wrapper = Styled.div`
        transition: display 2s linear 1s;
       display: ${(props) => (props.cast? "flex": "none")};
       flex-direction: column;
       align-items: end;
       padding: 20px;
       margin-left: 20px;
       width: 362px;
`


const Progress_bar = Styled.div`
    display: flex;
    align-items: center;
    svg{
        color: #C52127;
        margin-right: 15px;
        font-size: 1.2em;
    }
    
` 
const BarContainer = Styled.div`
    height: 25px;
    background-color: #7F8A64;
    width: 279px;
    border-radius: 0 50px 50px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
`
const Bar = Styled.div`
    height: 2px;
    background-color: #C52127;
    width: 195px;
`

const Liveplayer = ({ cast }) =>{
    const data= useStaticQuery(graphql`
    query{
        podcastRssFeedEpisode{
            item{
                enclosure{
                    url}
                }
            }
        }
    `)
    return(
        <Wrapper cast={cast}>
            <style type="text/css">
                {`
                .rhap_container {
                    border: 0;
                    padding: 0;
                    height: 0;
                    width: 150px;
                    margin: 10px 0;
                }
                .rhap_volume-controls{
                    justify-content: flex-end;
                    margin: 0;
                }
                .rhap_volume-button{
                    color: #C52127;
                    }
                .rhap_volume-bar{
                        background: #C52127;
                        height: 2px;
                }
                `}
            </style>
            {/* #7F8A64; */}
            <Progress_bar>
                <CgMediaLive />
                <BarContainer>
                    <Bar></Bar>
                    <Timer />
                </BarContainer>
            </Progress_bar>
            <AudioPlayer  
                preload
                autoPlayAfterSrcChange
                src={cast? data.podcastRssFeedEpisode.item.enclosure.url : "" } 
                // src={cast? "//emp.bbc.co.uk/emp/SMPj/2.36.7/iframe.html" : ""}
                customProgressBarSection={[]}
                customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
                customAdditionalControls={[]}
                showJumpControls={false}
                layout="horizontal-reverse"
            />

        </Wrapper>
        ) 
}

export default Liveplayer