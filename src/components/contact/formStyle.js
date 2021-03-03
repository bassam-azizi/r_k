import Styled from '@emotion/styled'

export const Wrapper = Styled.form`
    padding: 78px 20px 45px 97px;
    background-color: #E5E5E5 ;
    width: 62%;
    height: 631px;
    border: .1px solid #22222254;
    border-radius: 10px 0 0 10px;

    @media (max-width: 1232px){
        width: 60%;
    }
    @media (max-width: 1150px){
        padding-left: 57px;
    }

    @media (max-width: 900px){
        width: 90%;
        border-radius: 10px;
        margin-top: 59px;
    }

    h1{
        color: #505D2E;
        font-size: 24px;    
    }
    .input_container{
        width: 77%;
        position: relative;
        margin: 45px 0;    

        @media (max-width: 1300px){
        width: 91%;
    } 

        input{
            height: 58px;   
            width: 100%;
            padding: 0 0 0 15px;    
        }

        label{
            position: absolute;
            left: 20px;
            font-weight: 300;
            color: #22222289;
            font-size: 15px;
            top: 32%;
        }

        textarea{
            overflow: hidden;
            width: 100%;
            height: 100px;
        }

        .btn{
            background-color: #C52127;
            border-radius: 10px;
            color: #fff;
            width: 100%;
            padding: 0.1rem;
            line-height: 3;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;  
            border: none;
            outline: none;
            text-transform: uppercase;

        }
    }
    .msg label{
        top: 20px;
    }
    .msg textarea{
        padding: 20px 0 10px 20px;
    }
    `
