import React,  {useState, useEffect} from 'react'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import PlayerStyleA from './globalPodcastStyleA'
import PlayerStyleB from './globalPodcastStyleB'
import Share_Podcast from './sharePod'
import PlayBtn from '../../utils/playbtn.js'
import {Wrapper, Info } from './podcastStyle'



const Play = <PlayBtn />


const Podcast = props =>{

	
	const [width , setWidth] = useState(0);

	useEffect( () =>{
		const handelWindowResize = () => setWidth(window.innerWidth);
		window.onload = handelWindowResize();
		window.addEventListener('resize', handelWindowResize);
		return () => window.removeEventListener('resize', handelWindowResize);
	}, [] )

		const mp3 = props.data.item.enclosure.url
		let t;
		let playerA = 
		<>
	      	<PlayerStyleA />
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
      		<Share_Podcast props={props.data.item.title}/>
		</>;

      let playerB = 
      	<>
	      	<PlayerStyleB />
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
		          RHAP_UI.MAIN_CONTROLS,
		          RHAP_UI.CURRENT_TIME,
		          RHAP_UI.VOLUME_CONTROLS,
		        ]}
		          
		        customAdditionalControls={[]}
		        showJumpControls={false}
		        layout="stacked"
	      	/>
      		<Share_Podcast props={props.data.item.title}/>
	    </>;



      	if (width>1280 && width<1400){
      		t = playerA;
      	}
      	else if (width>800 && width < 1280){
      		t = playerB;
      	}
      	else if (width <600){
      		t = playerB ;
      	}
      	else{
      		t = playerA;
      	}	;

  return(
    <Wrapper>

      {t}

    </Wrapper>
  )
}

export default Podcast