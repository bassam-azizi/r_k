import React from 'react'
// import { Link } from 'gatsby'
import {FacebookShareButton, FacebookMessengerShareButton, TwitterShareButton} from "react-share";
import { FiFacebook, RiMessengerLine, FiTwitter } from 'react-icons/all'
import { Wrapper } from './sharePodStyle'

import Head from '../head'




const Share_Podcast = ({props}) =>{
	return(
    <>
      <Head title="past emission"></Head>
  		<Wrapper>
    			<p>Share</p>
    			<FacebookShareButton 
                      url="www.radiokhemire.com/emission"
    	                quote={`Radiokhemir - ${props}`}
    	                hashtag={`#${props}`}
    	                className='fb'>
                     <FiFacebook size={26}/>
          </FacebookShareButton>
          
          <TwitterShareButton 
                  		url={'ttp://www.camperstribe.com'}
                  		title={'ttp://www.camperstribe.com'} 
                  		hashtags={'ain draham'}>
                  	<FiTwitter size={26} />
          </TwitterShareButton>
  		</Wrapper>
    </>

		)
}


export default Share_Podcast