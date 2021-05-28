import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	height: 380px;

	a{
		text-decoration: none;
	}

	.pic{
		height: 225px;
		.gatsby-image-wrapper{
			height: 100%;
		}
	}

	.header{
		padding: 3px;
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