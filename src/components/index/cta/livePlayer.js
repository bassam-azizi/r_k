import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Timer from './timer'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { P , Bar, BarContainer, Progress_bar , Wrapper} from './livePlayerStyle'






const Liveplayer = ({ cast }) =>{
    const data= useStaticQuery(graphql`
    query{
        podcastRssFeedEpisode{
            item{
                title
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
                    margin: 0 0 10px 0;
                }
                .rhap_volume-controls{
                    justify-content: flex-end;
                    margin: 0;
                }
                .rhap_volume-button{
                    color: #7F8A64;
                    }
                .rhap_volume-bar{
                        background: #7F8A64;
                        height: 2px;
                }
                `}
            </style>
            {/* #7F8A64; */}
            <AudioPlayer  
                autoPlayAfterSrcChange
                src={cast? data.podcastRssFeedEpisode.item.enclosure.url : "" } 
                customProgressBarSection={[]}
                customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
                customAdditionalControls={[]}
                showJumpControls={false}
                layout="horizontal-reverse"
            />
            <Progress_bar>
                <BarContainer>
                    <Bar></Bar>
                    <Timer />
                </BarContainer>
            </Progress_bar>
            {/* <P>{data.podcastRssFeedEpisode.item.title}</P> */}
            <P>13h-14h One Hour Sport with Fedi Arfaoui</P>
        </Wrapper>
        ) 
}

export default Liveplayer