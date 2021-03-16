import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
// import { Link } from 'gatsby'
import {FacebookShareButton, FacebookMessengerShareButton, TwitterShareButton} from "react-share";
import { FiFacebook, RiMessengerLine, FiTwitter } from 'react-icons/all'
import { Wrapper } from './sharePodStyle'

import Head from '../head'




const Share_Podcast = ({props}) =>{
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          emissionUrl
        }
      }
    }
    `)
	return(
  		<Wrapper>
    			<p>Share</p>
          <Head title="past emission"></Head>
    			<FacebookShareButton 
                      url={data.site.siteMetadata.emissionUrl}
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

		)
}


export default Share_Podcast