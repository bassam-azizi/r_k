import React from 'react'
import { Wrapper, Close, Lin} from './style_lang_menu'


const Lang_menu = () =>{
    return(
        <Wrapper>
            <Close>^</Close>
            <Lin to="/">English</Lin>
            <Lin to="/">Francais</Lin>
            <Lin to="/">العربية</Lin>
        </Wrapper>
    )
}


export default Lang_menu