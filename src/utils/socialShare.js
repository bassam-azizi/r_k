import React from 'react'
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon, TwitterShareButton, TwitterIcon } from "react-share";


const Social_Share = ({ title, img , path}) => {
    
    return (
    	<>
        <div className="SmContainer" >
	        <FacebookShareButton 
               url={path}
               media={img}
                quote={`Radiokhemir - ${title}`}
                hashtag={`#${title}`}
                className='fb'>
				<FacebookIcon size={36} round/>
			</FacebookShareButton> 
			<LinkedinShareButton url= { path } title = { `Radiokhemir - ${title} ` } >
	        	<LinkedinIcon size={36} round/> 
	        </LinkedinShareButton>

	        <TwitterShareButton url = { path } title = { `Radiokhemir - ${title} ` } >
	        	<TwitterIcon size={36} round /> 
	        </TwitterShareButton>
	        <PinterestShareButton media={img}
	        url = { path} title = { `Radiokhemir - ${title} ` } >
	        	<PinterestIcon size={36} round/> 
	        </PinterestShareButton>  
        </div>
        </>
    )
}

export default Social_Share