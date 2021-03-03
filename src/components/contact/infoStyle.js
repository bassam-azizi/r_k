import Styled from '@emotion/styled'

export const Wrapper = Styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 38%;
	height: 631px;
	padding: 181px 27px 0 54px;
	color: #fff;
	background: #373737;
	font-size: 15.5px;
	letter-spacing: .6px;
	border: .1px solid ##22222254;
	border-radius: 0 10px 10px 0;

	@media (max-width: 1232px){
		width: 40%;
	}

	@media (max-width: 900px){
        width: 90%;
        height: 278px;
        border-radius:10px;
        flex-direction: row;
        padding: 51px 0 51px 53px;
        align-items: center;
    }

    @media (max-width: 650px){
    	flex-direction: column;
    	height: 451px;
        padding: 51px 31px 51px 53px;
		}

	.adress{
		color: f1f1f1;

		h1{
			font-size: 20px;
			font-weight:600;
		}
		p{
			color: #ffffffcc;
		}

		@media (max-width:900px){
			width: 40%;
		}
		@media (max-width:650px){
			width: 100%;
		}
	}
	.sponsored{
		margin-bottom: 54px; 
		font-style: italic;
		color: #ffffffcc;

		@media (max-width:900px){
			width: 42%;
			align-self: flex-end;
			margin-right: 15px;
		}

		@media (max-width:650px){
			width: 100%;
			margin: 0;
		}


		p bold{
			font-style: normal;
			color: #fff;
		}

	}
`