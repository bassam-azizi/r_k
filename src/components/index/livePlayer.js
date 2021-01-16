import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Timer from './timer'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { IoMdPause } from 'react-icons/all'

// import './livePlayer.scss' 

import Styled from '@emotion/styled'


// display: ${({cast}) => (cast? "flex": "none")};   
const Wrapper = Styled.div`
        transition: display 2s linear 1s;
       display: ${(props) => (props.cast? "flex": "none")};
       flex-direction: column;
       padding: 20px;
       margin-left: 20px;
`


const Progress_bar = Styled.div`
    display: flex;
    align-items: center;
`
// const Pause = Styled(IoMdPause)`
//     color: green;
// ` 
const BarContainer = Styled.div`
    height: 25px;
    background-color: green;
    width: 220px;
    border-radius: 0 50px 50px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Bar = Styled.div`
    height: 2px;
    background-color: #fff;
    width: 180px;
`
// const Timer = Styled.p`
//     overflow: hidden;
// `

const Liveplayer = ({ cast }) =>{
    // var Date, h , m, s ;
    // const currentTime = function(){
    //      Date = new Date();
    //      h = Date.getHours();
    //      m = Date.getMunites();
    //      s = Date.getSeconds();
    //     return h + ":" + m + ":" + s ;
    //     }
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
                    }
                `}
            </style>
            <Progress_bar>
                <IoMdPause />
                <BarContainer>
                    <Bar></Bar>
                    <p><Timer /></p>
                </BarContainer>
            </Progress_bar>
            <AudioPlayer  
                src={data.podcastRssFeedEpisode.item.enclosure.url} 
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