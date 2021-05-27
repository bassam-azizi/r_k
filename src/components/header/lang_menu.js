import React from 'react'
import { Wrapper, Close, Lin} from './style_lang_menu'


const LangMenu = props =>{
    return(
        <Wrapper menu_open={props.menu_open}>
            <Close role="button" onClick={props.toggle} onKeyDown={props.toggle} tabIndex={0}>^</Close>
            <Lin to="/">English</Lin>
            <Lin to="/">Francais</Lin>
            <Lin to="/">العربية</Lin>
        </Wrapper>
    )
}


export default LangMenu