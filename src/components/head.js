import React from 'react'
import { Helmet } from 'react-helmet'

import { useStaticQuery, graphql} from 'gatsby'

const Head = (props) =>{
	const data = useStaticQuery(graphql`
		query{
			site{
				siteMetadata{
					title
					url
				}
			}
		}
		`);
	// let location = props.location === undefined ? "" : props.location.pathname;
    let currentUrl = data.site.siteMetadata.emissionUrl;
    let quote = props.quote !== undefined ? props.quote : "";
    let title = props.title !== undefined ? props.title : "Radio Khemir - From youth and to the youth";
    let image = props.image !== undefined ? props.image : "https://storage.googleapis.com/cmperstribe_storage_usha/Banner/IMG_3640.JPG";
    let description = props.description !== undefined ? props.description  : "Radio khemir lets you Have an eye on north west local news, opportunity, It's the voice of rural region and forgotten youth, We welcome you in our lives and here you are one of us." 
    
	return(
		<Helmet>
		     <title>{` ${props.title} | ${data.site.siteMetadata.title}`}</title>
		     <meta charset="utf-8" />
		     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
		     <meta name="csrf_token" content="" />
		     <meta property="type" content="website" />
		     <meta property="url" content={currentUrl} />
		     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		     <meta name="msapplication-TileColor" content="#ffffff" />
		     <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
		     <meta name="theme-color" content="#ffffff" />
		     <meta name="_token" content="" />
		     <meta name="robots" content="noodp" />
		     <meta property="title" content={title} />
		     <meta property="quote" content={quote} />
		     <meta name="description" content={description} />
		     <meta property="image" content={image} />
		     <meta property="og:locale" content="en_US" />
		     <meta property="og:type" content="website" />
		     <meta property="og:title" content={title} />
		     <meta property="og:quote" content={quote} />
		     <meta property="og:hashtag" content="#radiokhemir" />
		     <meta property="og:image" content={image} />
		     <meta content="image/*" property="og:image:type" />
		     <meta property="og:url" content={currentUrl} />
		     <meta property="og:site_name" content="CampersTribe" />
		     <meta property="og:description" content={description} /> 
	    </Helmet>
)
}


export default Head