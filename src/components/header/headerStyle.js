import Styled from '@emotion/styled'

export const Wrapper = Styled.nav`
        width: 100%;
        `
export const Container = Styled.div`
        max-width: 1320px;
        margin: 28px auto;
        height: 104px;
        display: flex;
        justify-content: space-between;
        position: relative;
        align-items: center;
        @media (max-width: 1188px){
                padding : 0 20px;
        }
        @media (max-width: 906px){
                flex-direction: column;
                justify-content: flex-start;
  }
        `
export const Hamburger = Styled.div`
        position: fixed;
        top: 2em;
        right: 2em;
        display:  none;
        background-color: #111;
        width: 30px;
        height: 3px;
        transition: all .3s linear;
        align-self: center;
        position: relative;
        transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
        @media (max-width: 768px){
        display: block;
        }
        `