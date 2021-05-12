import Styled from '@emotion/styled'

export const Wrapper = Styled.div`

	:hover{
		transform: scale(1.02);
		border-radius: 4px;
		box-shadow: 0px 35px 49px -22px #B3AC6542;
	}

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
		
		@media (max-width: 916px){
			width: 50%;
			margin: 10px 30px 10px 0;
		}
	}


	.info-container{
		margin: 15px 0;
		padding: 0 10px;

		@media (max-wicth: 916px){
			padding: 0;
			width: 50%
		}

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

				@media (max-width: 916px){
					width: auto;
				}
			}
		}
	}
`