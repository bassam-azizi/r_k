import React from 'react'


const Podcast = props =>{
  const mp3 = props.data.enclosure.url
  return(
    <div key={props.data.key}>
      <p>{props.data.title}</p>
      <p>{props.data.pubDate}</p>
      <p>{props.data.link}</p>
      <audio controls>
        <source src={mp3} type="audio/mp3" />
        <track default src="captions_es.vtt" kind="captions" srcLang="en" label="spanish_captions" />
      </audio>
    </div>
  )
}

export default Podcast