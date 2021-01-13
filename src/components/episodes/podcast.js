import React from 'react'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import './podcast.scss'
import Styled from '@emotion/styled'
// import { FaPlay } from "react-icons/all"
import PlayBtn from './playbtn.js'
// import SoundBtn from './soundBtn.js'

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
// const Sound = <SoundBtn />

const Podcast = props =>{
  const mp3 = props.data.item.enclosure.url
  const progressBar = RHAP_UI.PROGRESS_BAR
  return(
    <Wrapper>
      <AudioPlayer 
        src={mp3} 
        customIcons={{
           play: Play
          //  volume: Sound
}}
        customProgressBarSection={[
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.CURRENT_TIME
        ]}
        // customVolumeControls={[]}
        customControlsSection={[RHAP_UI.VOLUME_CONTROLS,<Info><h5>{props.data.item.title}</h5><p>{props.data.item.enclosure.length}</p></Info>,RHAP_UI.DURATION]}
        customAdditionalControls={[]}
        showJumpControls={false}
        layout="horizontal-reverse"
      />
    </Wrapper>
    // <div key={props.data.key}>
    //   <p>{props.data.item.title}</p>
    //   <p>{props.data.pubDate}</p>
    //   <audio controls>
    //     <source src={mp3} type="audio/mp3" />
    //     <track default src="captions_es.vtt" kind="captions" srcLang="en" label="spanish_captions" />
    //   </audio>
    // </div>
  )
}

export default Podcast