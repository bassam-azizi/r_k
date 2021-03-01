import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	margin: 109px auto 30px;
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
		justify-content: space-between;

		@media (max-width:1380px){
			justify-content: space-around;
		}
	}
`