import Styled from '@emotion/styled'

export const Wrapper = Styled.div`
	width: 700px;
	margin: 120px auto;

	.image{
		width: 100%;
		margin: 20px 0 ;
	}

	.header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 20px 0;

		.info_one{
			h1{
				color: #C52127;
				font-size: 24px;
			}
			p{
				font-style: italic;
				color: #222;
				font-style: 18px;
			}
		}
		.info_two{
			h1{
				color:#7F8A64;
				font-size: 24px;
			}
			p{
				font-style: italic;
				color: #222;
				font-style: 18px;
			}
		}
	}

	.description{
		color: #222;
	}

`