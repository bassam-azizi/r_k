import Styled from '@emotion/styled'



export const Wrapper = Styled.div`
	margin: 90px 0;
	display: grid;
	grid-template-columns: repeat(12, 1fr);

	@media (max-width: 1100px){
            grid-template-columns: 50px repeat(12, 1fr) 50px;
        }
    @media (max-width: 916px){
        grid-template-columns: 110px repeat(12, 1fr) 110px;
    }
    @media (max-width: 768px){
        grid-template-columns: 50px repeat(12, 1fr) 50px;
    }
    @media(max-width: 420px){
    	grid-template-columns: repeat(12,1fr);
    }
    @media(max-width: 315px){
    	grid-template-columns: 10px repeat(12,1fr) 10px;
    }
`

export const Container = Styled.div`
	grid-column: 2/-2;
	display: grid;
	grid-template-columns: repeat(auto-fit,minmax(260px, 1fr));
	grid-gap: 35px;

	@media(max-width: 619px){
		grid-column: 4/-4;
	}
	@media(max-width: 460px){
		grid-column: 3/-3;
	}
	
	`