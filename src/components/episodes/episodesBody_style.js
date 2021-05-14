import Styled from '@emotion/styled'



export const Wrapper = Styled.div`
	// width: 87%;
	// max-width: 1270px;
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
`

export const Container = Styled.div`
	grid-column: 2/-2;
	display: grid;
	grid-template-columns: repeat(auto-fit,minmax(240px, 1fr));
	grid-gap: 35px;
	`