import Styled from '@emotion/styled'


export const Wrapper = Styled.div `
	color: #333;
	background: #fff;
	display: flex;
	justify-content: center;
	padding-top:25px;
	align-items: center;

	p{
		margin-right: 35px;
		color: #444;
		cursor: pointer;
		:hover{
			color:#222;
		}
	}
	.SmContainer{
		button{
			margin-left: 20px;
			opacity: .5;
			outline: none;
			:hover{
				opacity: 1;
			}
		}
	}
`