import React,  {useState, useEffect} from 'react'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import PlayerStyleB from './globalPodcastStyle'
import PlayerStyleS from './globalPodcastStyleS'
import PlayBtn from '../../utils/playbtn.js'
import {Wrapper , Info} from './podcastStyle'


const Play = <PlayBtn />


const Podcast = props =>{
		const [width , setWidth] = useState(window.innerWidth);

		useEffect( () =>{
			const handelWindowResize = () => setWidth(window.innerWidth);
			window.addEventListener('resize', handelWindowResize);
			return () => window.removeEventListener('resize', handelWindowResize);
		}, [] )
	
	console.log(width);

  const mp3 = props.data.item.enclosure.url
  return(
    <Wrapper>
      {/* Global Style for the audio player  */}

      {
      	width > 1330 ? 
      		<>
		      <PlayerStyleB />
		      <AudioPlayer 
		        src={mp3} 
		        customIcons={{
		           play: Play
		        }}
		        customProgressBarSection={[
		          RHAP_UI.MAIN_CONTROLS,
		          RHAP_UI.CURRENT_TIME
		        ]}
		        customControlsSection={
		          [RHAP_UI.VOLUME_CONTROLS,
		          <Info>
		            <h5>{props.data.item.title}</h5>
		            <p>{props.data.item.isoDate}</p>  
		          </Info>,
		          RHAP_UI.PROGRESS_BAR,RHAP_UI.DURATION
		          ]}
		        customAdditionalControls={[]}
		        showJumpControls={false}
		        layout="horizontal-reverse"
		      />
	      </>
	      :
	      <>
		      <PlayerStyleS />
		      <AudioPlayer 
		        src={mp3} 
		        customIcons={{
		           play: Play
		        }}
		        customControlsSection={[
		          <Info>
		            <h5>{props.data.item.title}</h5>
		            <p>{props.data.item.isoDate}</p>  
		          </Info>,
		          RHAP_UI.PROGRESS_BAR,RHAP_UI.DURATION
		        ]}
		        customProgressBarSection={[
		          RHAP_UI.VOLUME_CONTROLS,
		          RHAP_UI.MAIN_CONTROLS,
		          RHAP_UI.CURRENT_TIME
		        ]}
		          
		        customAdditionalControls={[]}
		        showJumpControls={false}
		        layout="stacked-reverse"
		      />
		    </>
      }

    </Wrapper>
  )
}

export default Podcast