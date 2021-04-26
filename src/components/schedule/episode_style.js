import Styled from '@emotion/styled'

export const Wrapper = Styled.div`

	a{
		font-size: 18px;
		margin-bottom: 60px;
		display: flex;
		justify-content: center;
		cursor: pointer;
		text-decoration: none;
	}

	.image-container{
		width: 273px;
		margin: 10px 30px; 
	}

	.info-container{
		margin: 15px 5px;

		.header{
			display: flex;
			justify-content: space-between; 
			height: 57px;

			.title{
				h1{
					color: #C52127;
					font-size: 16px;
				}
				p{
					font-style: italic;
					color: #222;
					font-size: 14px;
				}
			}

			.start-time{
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				h2{
					color: #7F8A64;
					font-weight: bold;
					padding-bottom: 5px;
					font-size: 16px;
				}
				// .author{
				// 	display: flex;
				// 	flex-direction: row-reverse;

				// 	.picture-wrapper{
				// 		border-radius: 50%;
				// 		width: 42px;
				// 		height: 42px;
				// 		overflow: hidden;
				// 	}
				// 	span{
				// 		font-size: 16px;
				// 		color: #222;
				// 		margin: 0 7px;
				// 		align-self: center;
				// 		height: auto;
				// 	}
				// }
			}
		}
		.description{
			p{
				font-size: 14px;
				color: #222;
				height: 63px;
				width: 450px;
				overflow: hidden;
			}
		}
	}
`