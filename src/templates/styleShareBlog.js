import Styled from '@emotion/styled'

export const Wrapper = Styled.div `
	position: fixed;
	right: 3%;
	top:35%;

	@media (max-width: 768px){
		position: static;
		display: flex;
		justify-content: center;
	}
	.SmContainer{
		display: flex;
		flex-direction: column;

		@media (max-width: 768px){
			flex-direction: row;
			margin-bottom: 70px;
		}
		button{
			margin-top: 15px;
			opacity: .5;

			@media (max-width: 768px){
				margin-right: 15px;
			}
			:hover{
				opacity: 1;
			}
		}

	}
`