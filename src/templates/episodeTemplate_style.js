import Styled from '@emotion/styled'

export const Wrapper = Styled.div`
	width: 700px;
	margin: 120px auto;

	.image{
		width: 100%;
		margin: 20px 0 ;
		display: grid;
		justify-content: center;

		.gatsby-image-wrapper{
			border-radius: 5px;
		}
	}

	.header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 40px 0 5px;

		.info_one{
			h1{
				color: #C52127;
				font-size: 24px;
			}
			p{
				color: #444;
				font-size: 14px;
			}
		}
		.info_two{
			h1{
				color:#7F8A64;
				font-size: 18px;
				font-weight: bold;
			}
			p{
				color: #666;
				font-style: 14px;
			}
		}
	}

	.podcast{
		display: grid;
		justify-content: center;
	}

	.description{
		color: rgb(51, 51, 51);

		p{
			margin: 36px 0;
			letter-spacing: 1.007px;
			font-size: 17px;
			line-height: 44px;
			font-weight: 400;
			text-indent: 2px;
			outline: currentcolor none medium;
		}
	}

`