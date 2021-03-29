import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
            width : 50%;
            margin: 125px auto 77px;
            position: relative;
            background-color: #e5e5E5 ;
            border: .2px solid #37373745 ;
            display: flex;
            align-items: center;
            flex-direction: column;

            @media (max-width: 1400px){
                  width: 60%;
            }

            @media (max-width: 1078px){
                  width: 70% ;
            }
            @media (max-width: 916px){
                  margin-top: 150px;
            }

            @media (max-width: 768px){
                  width: 80%;
                  margin-top: 170px;
            }
            @media (max-width: 460px){
                  width: 100%;
                  border-right: none;
                  border-left: none;
                  padding: 0 10px;
            }
            


            .container{
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  text-align: left;
                  position: relative;
                  
                  & > ul > li{
                      line-height: 40px;
                      color: #222;
                      margin-left: 100px;

                      strong{
                        position: absolute;
                        left: 0;
                        font-family: Roboto;
                      }
                  }

            }

            .title{
                  padding: 20px 0;
                  margin-bottom: 60px;

                  h1{
                        padding: 30px 0 0;
                        color: #222;
                  }

                  p{
                        color: #222;
                        font-size: 14px;
                  }

            }
            .footer{
                  padding: 90px 0 40px;
            }
`
export const Bars = Styled.div`
            position: absolute;
            top: -30px;
            left: 50px;
            height: 90px;
            display: flex;

            @media (max-width: 768px){
                  height: 70px;
                  left: auto;
                  right: 50px;
            }
            @media (max-width: 600px){
                  height: 50px;
            }


            .bar{
                  background-color: #C52127;
                  width: 3px;
                  margin-right: 20px;

                  @media (max-width: 600px){
                        margin-right: 15px;
                        border-radius: 30%;
                  }
            }
`

