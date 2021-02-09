import React from 'react'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import PlayerStyle from './globalPodcastStyle'
import PlayBtn from '../../utils/playbtn.js'
import {Wrapper , Info} from './podcastStyle'


const Play = <PlayBtn />

const Podcast = props =>{
  const mp3 = props.data.item.enclosure.url
  return(
    <Wrapper>
      {/* Global Style for the audio player  */}
      <PlayerStyle />
      <AudioPlayer 
        src={mp3} 
        customIcons={{
           play: Play
}}
        customProgressBarSection={[
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.CURRENT_TIME
        ]}
        customControlsSection={[RHAP_UI.VOLUME_CONTROLS,<Info><h5>{props.data.item.title}</h5><p>{props.data.item.enclosure.length}</p></Info>, RHAP_UI.PROGRESS_BAR,RHAP_UI.DURATION]}
        customAdditionalControls={[]}
        showJumpControls={false}
        layout="horizontal-reverse"
      />
    </Wrapper>
  )
}

export default Podcast