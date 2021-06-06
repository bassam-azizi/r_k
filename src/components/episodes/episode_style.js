import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	width: 273px;
	margin: 10px 30px; 
	max-width: 400px;

	:hover{
		transform: scale(1.02);
		border-radius: 4px;
		box-shadow: 0px 35px 49px -22px #B3AC6542;
	}

	a{
		text-decoration: none;
	}

	.pic{
		.gatsby-image-wrapper{
			height: 100%;			
		}
	}

	.header{
		padding-top: 10px;				

		.header-title{
			h1{
				font-size: 16px;
				color: #C52127;
			}
		}

		.header-info{
			display: flex;
			justify-content: space-between;

			span{
				color: #666;
				font-size: 14px;
			}
		}
		
		.serie{
			display: block;
			font-size: 14px;
			color: rgb(127, 138, 100);
		}
		.description{
			overflow: hidden;
			font-size: 14px;
			color: #222;
			margin-top: 7px;
			height: 64px;
		}
	}


`