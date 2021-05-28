import Styled from '@emotion/styled'


export const Wrapper = Styled.div `
	// background: #11ff1f09; 
	
	.container{
		position: relative;
		max-width: 770px;
		padding: 94px 45px;
		margin: 0 auto;

		@media (max-width:800px){
			width: 80%;
		}
		@media (max-width: 768px){
			padding-bottom: 45px;
			width: 95%;
		}
		@media (max-width: 480px){
			width: 100%;
		}
	.shareBtn{
		text-decoration: none;
		color: #222;
		position: absolute;
		top: 18px;
		right: 22px;
		:hover{
			color: #7F8A64;
		}
	}
	}

	.header{
		padding: 70px 0 50px;
		display: block;
		text-align: left;
	    font-size: 24px;

	    h1{
	    	font-size: 36px;
	    	color: rgb(40,40,40);
	    	letter-spacing: 1.009px;
	    }
	  }

	.pubdate{
		color: #858484;
		font-size: 14px;
	}

	.body{
		padding: 0 0 98px;
	    color: #333;

	    .img{
	    	display: grid;
	    	justify-content: center;

		    .gatsby-image-wrapper{
				max-width: 720px;
				margin: 0 0 20px;
				border-radius: 10px;
			}
	    }

	    & > p{
	        line-height: 44px;
	        font-weight: 400;
	        margin: 36px 0;
	        letter-spacing: 1.007px;
	        font-size: 17px;
	        text-indent: 2px;
	    }
	  }
`