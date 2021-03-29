import React from 'react'
import SocialMediaButtons from 'react-social-media-buttons';
 
const Social_Media = () => {

  const buttonStyle = {
    width: '73px', 
    height: '73px',
     margin: '0px 16px', 
     backgroundColor: '#ffffff'
   };
 
  const iconStyle = { color: '#25281D' };
 
  return(
    <div>
      <SocialMediaButtons 
        links=
        {['https://www.facebook.com/radioKhemir','https://www.instagram.com/radiokhemir/','https://twitter.com/','https://www.linkedin.com/']}
        buttonStyle={buttonStyle} 
        iconStyle={iconStyle}   
        openNewTab={true}/>
    </div>
  );
}

  export default Social_Media