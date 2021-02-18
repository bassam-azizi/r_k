import Styled from '@emotion/styled'
// import px2vw from '../../utils/px2vw'

export const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    max-width:1220px;
    margin: 115px auto;
    padding-left: 70px;

    @media (max-width:1064px){
        flex-direction: column;
        margin-top: 160px;
    }

    @media (max-width: 600px){
        padding-left: 10px;
    }


    .about{
        width: 65%;
        p{
            letter-spacing: 0.2px;
            line-height: 3;
            color: #222;
            width: 90%;
            margin: 0 auto;
        } 

        @media (max-width: 1064px){
            width: 100%;
            border-bottom: 1px solid #22222245 ;
            padding-bottom: 30px;
        } 
    }

    .association{
        margin-top: 30px;
    }

    .team{
        border-left: 1px solid #22222245 ;
        padding-left: 10px;

        ul li{
            line-height: 3;
            letter-spacing: 0.2px;
            padding-left: 30px;
            color: #222;
        }

        @media (max-width: 1064px){
            border-left: none;
            padding-top: 30px;
        }
    }
    .title{
        line-height: 2;
        font-weight: 500;
        padding-left: 12px;    
        font-size: 20px;
    }
`

