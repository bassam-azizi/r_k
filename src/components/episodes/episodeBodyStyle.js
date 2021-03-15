
import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	margin: 129px auto 40px;
	max-width: 1291px;
	width: 90%;

	a{
		text-decoration: none;
		color: #222;
		font-size: 16px;
		margin: 0 96px 0 17px;
		outline: none;
	}

	.container{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-right: -5%;

		@media (max-width:1380px){
			justify-content: space-around;
		}
	}
`