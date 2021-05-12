import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	font-size: 16px;
	// margin: 107px auto;
	display: grid;
	grid-template-columns: repeat(12,1fr);

	@media (max-width: 1100px){
		grid-template-columns: 50px repeat(10,1fr) 50px;
	}
	@media (max-width: 916px){
            grid-template-columns: 110px repeat(12, 1fr) 110px;
        }

	.today{
		font-size: 16px;
		color: #83836D;
		margin: 70px 0;
		grid-column: 2/-2;
	}
`
export const Container = Styled.div`
	display: flex;
	grid-column: 2/-2;
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

	@media (max-width : 1185px){
		width: 800px;
		flex-direction: column;
		justify-self: center;

		.time_title{
			padding-right: 45px;
			margin-bottom: 30px;
			width: max-content;

			::after{
				right: 0;
				top: 16px;
				width: 1.2px;
				transform: rotate(90deg);
			}
		}
	}
`