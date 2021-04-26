import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	font-size: 16px;
	width: 80%;
	margin: 107px auto;
`
export const Container = Styled.div`
	display: flex;
	justify-content: center;

	.time_title{
		color: #7F8A64;
		font-size: 17px;
		position: relative;
		padding-right: 70px;
		margin-right: 40px;
		font-style: italic;

		::after{
			content: "";
			display: block;
			position: absolute;
			right: 0;
			top: 14px;
			width: 3px;
			height: 70px;
			background-color: #C52127;
		}
	}
`