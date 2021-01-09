import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'


const Podcast = props =>{
  const mp3 = props.data.item.enclosure.url
  return(
    <AudioPlayer src={mp3} />
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