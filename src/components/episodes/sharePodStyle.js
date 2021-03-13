import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	color: #333;
	background: #fff;
	display: flex;
	justify-content: flex-end;
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
`