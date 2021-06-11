import Styled from '@emotion/styled'


export const Container = Styled.div `
    display: block;
    height: 60px;
    padding: 7px 4.5rem;
    margin: 0;
    background-color: #373737;
    color: #FFF;
    font-size: 14px;
    flex-shrink:0;
    direction: ${props => props.locale === "ar"? "rtl" : "ltr"};


    @media (max-width: 768px){
        padding: 37px 46px;
        height: auto;
    }
    @media (max-width: 550px){
        padding: 20px 46px;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        @media( max-width: 550px){
            flex-direction: column;
            align-items: flex-start;
        }
    }

   
    div .footerItem{
        margin: 0;  
        @media (max-width : 550px){
            line-height: 35px;
        }
    }

    div .firstItem{
        @media (max-width: 768px){
            display: none;
        }
        @media (max-width: 550px){
            display: block;
        }
    }
    .contact{
        display: none;
        @media (max-width: 768px){
            display: block;
            margin-bottom: 20px;
        }
        @media (max-width: 550px){
            display: none;
        }
    }
`