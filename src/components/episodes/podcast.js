import React from 'react'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import './podcast.scss'
import Styled from '@emotion/styled'
import PlayBtn from './playbtn.js'

const Wrapper = Styled.div`
  width: 600px;
  *{
    outline: none;
  }
  background-color:  #aaa;
`
const Info = Styled.div`
  position: relative;
  margin-left: 15px;
  text-align: left;
  h5{
    line-height: 18.75px;
    font-weight: 400;
    font-size: 16px;
  }
  p{
    position: absolute;
    font-weight: 200px;
    font-size: 12px;
    line-height: 14px;
    color: #919191;
  }
`
const Play = <PlayBtn />

const Podcast = props =>{
  const mp3 = props.data.item.enclosure.url
  return(
    <Wrapper>
      <AudioPlayer 
        src={mp3} 
        customIcons={{
           play: Play
}}
        customProgressBarSection={[
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.CURRENT_TIME
        ]}
        // customVolumeControls={[]}
        customControlsSection={[RHAP_UI.VOLUME_CONTROLS,<Info><h5>{props.data.item.title}</h5><p>{props.data.item.enclosure.length}</p></Info>, RHAP_UI.PROGRESS_BAR,RHAP_UI.DURATION]}
        customAdditionalControls={[]}
        showJumpControls={false}
        layout="horizontal-reverse"
      />
    </Wrapper>
  )
}

export default Podcast