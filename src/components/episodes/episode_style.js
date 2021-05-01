import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	height: 380px;

	.pic{
		height: 225px;
		.gatsby-image-wrapper{
			height: 100%;
		}
	}

	.header{
		padding: 3px;

		h1{
			font-size: 16px;
			color: #C52127;
		}
		.serie{
			display: block;
			font-size: 14px;
			color: #222;
			font-style: italic;
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