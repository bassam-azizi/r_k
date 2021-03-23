import Styled from '@emotion/styled'

export const Wrapper = Styled.div `
	position: fixed;
	right: 3%;
	top:35%;
	.SmContainer{
		display: flex;
		flex-direction: column;
		button{
			margin-top: 15px;
			opacity: .5;
			:hover{
				opacity: 1;
			}
		}
	}
`