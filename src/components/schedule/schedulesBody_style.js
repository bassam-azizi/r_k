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

    @media (max-width: 745px){
            grid-template-columns: 50px repeat(12, 1fr) 50px;
    }

	.today{
		font-size: 16px;
		color: #83836D;
		margin: 130px 0 40px;
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

		@media (max-width: 1185px){
			margin-left: 107px;
			margin-bottom: 30px;
			width: max-content;

			::after{
				right: 130%;
				top: -15px;
				width: 1.2px;
				transform: rotate(90deg);
			}
		}


	}

	@media (max-width: 1185px){
		width: 800px;
		flex-direction: column;
		justify-self: center;

		
	}
	
	@media (max-width: 916px){
		width: auto;

		.time_title{
			margin-left: 77px;

			::after{
				right: 130%;
			}
		}

	}
`