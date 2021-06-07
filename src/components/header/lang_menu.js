import React from 'react'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { Wrapper, Close, Span} from './style_lang_menu'



const languageName = {
  en: "En",
  fr: "Fr",
  ar: "Ar",
}

const LangMenu = props =>{
    return(
        <Wrapper menu_open={props.menu_open}>
	            <Close role="button" onClick={props.toggle} onKeyDown={props.toggle} tabIndex={0}>^</Close>
	            <IntlContextConsumer>
                    {  ({ languages, language: currentLocale }) =>
                          languages.filter(language => (language!==currentLocale)).map(language => (
                            <Span
                              key={language}
                              role = "button"
                              onClick={() => changeLocale(language)}
                              onKeyDown={() => changeLocale(language)}
                              tabIndex={0}
                            >
                                {languageName[language]}
                            </Span>
                             ))
                    }
                  </IntlContextConsumer>
        </Wrapper>
    )
}


export default LangMenu