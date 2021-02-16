import React from 'react'
import { Wrapper, Close, Lin} from './style_lang_menu'


const Lang_menu = props =>{
    return(
        <Wrapper menu_open={props.menu_open}>
            <Close onClick={props.toggle}>^</Close>
            <Lin to="/">English</Lin>
            <Lin to="/">Francais</Lin>
            <Lin to="/">العربية</Lin>
        </Wrapper>
    )
}


export default Lang_menu