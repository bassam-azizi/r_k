import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	margin: 129px auto 40px;
	max-width: 1291px;
	width: 90%;

	/*.circle1{
		margin-left: 50px;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		background: #C52127;
		cursor: pointer;
		position: relative;

		.circle2{
			width:25px;
			height: 25px;
			border-radius: 50%;
			background: #7F8A64;
			cursor: pointer;
			position: absolute;
			top:5px;
			left: 5px;
		}
	}*/

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
		margin-right: -5%;

		@media (max-width:1380px){
			justify-content: space-around;
		}
	}
`