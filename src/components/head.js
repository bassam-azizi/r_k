import React from 'react'
import { Helmet } from 'react-helmet'

import { useStaticQuery, graphql } from 'gatsby'

const Head = (props) => {
    const data = useStaticQuery(graphql `
		query{
			site{
				siteMetadata{
					title
					url
					emissionUrl
				}
			}
		}
		`);



    // let location = props.location === undefined ? "" : props.location.pathname;
    let type = props.type !== undefined ? props.type : "website";
    let currentUrl = props.path !== undefined ? props.path : data.site.siteMetadata.url;
    let quote = props.quote !== undefined ? props.quote : "";
    let title = props.title !== undefined ? props.title : "Radio Khemir - From youth and to the youth";
    let image = props.image !== undefined ? props.image : "https://res.cloudinary.com/bassem-azizi/image/upload/v1615846566/william-iven-TMOeGZw9NY4-unsplash_rzgrlu.jpg";
    let description = props.description !== undefined ? props.description : "Radio khemir lets you Have an eye on north west local news, opportunity, It's the voice of rural region and forgotten youth, We welcome you in our lives and here you are one of us."

    return (
        <Helmet>
		     <title>{` ${props.title} | ${data.site.siteMetadata.title}`}</title>
		     <meta charset="utf-8" />
		     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
		     <meta name="csrf_token" content="" />
		     <meta property="type" content={type} />
		     <meta property="url" content={currentUrl} />
		     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		     <meta name="msapplication-TileColor" content="#ffffff" />
		     <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
		     <meta name="theme-color" content="#ffffff" />
		     <meta name="_token" content="" />
		     <meta name="robots" content="noodp" />
		     <meta property="fb:app_id" content="281289809224344" />
		     <meta property="title" content={title} />
		     <meta property="quote" content={quote} />
		     <meta Pname="description" content={description} />
		     <meta property="image" content={image} />


		     <meta property="og:locale" content="en_US" />
		     <meta property="og:type" content={type} />
		     <meta property="og:title" content={title} />
		     <meta property="og:quote" content={quote} />
		     <meta property="og:hashtag" content="#radiokhemir" />
		     <meta property="og:image" content={image} />
		     <meta content="image/*" property="og:image:type" />
		     <meta property="og:url" content={currentUrl} />
		     <meta property="og:site_name" content="radiokhemir" />
			<meta property="og:description" content={description} /> 

			<meta itemprop="name" content="radio khemir" />
			<meta itemprop="description" content={description}/>
			<meta itemprop="image" content={image} />


		     <meta data-react-helmet="true" name="twitter:card" content="radio khemir news" />
			<meta data-react-helmet="true" name="twitter:site" content={`@${title}`} />
			<meta data-react-helmet="true" name="twitter:title" content={`${title} | Radio Khemir`} />
			<meta data-react-helmet="true" name="twitter:description" content={description} />
			<meta data-react-helmet="true" name="twitter:image" content={image} />

	    </Helmet>
    )
}


export default Head