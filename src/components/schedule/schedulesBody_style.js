import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	font-size: 16px;
	width: 80%;
	margin: 107px auto;

	.today{
		font-size: 16px;
		color: #83836D;
		margin: 70px 20px;
	}
`
export const Container = Styled.div`
	display: flex;
	justify-content: center;

	.time_title{
		color: #83836D;
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