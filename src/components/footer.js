import React from 'react'
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import { Container } from './footerStyle'

const Footer = () => {
    return (
        <Container locale={useIntl().locale}>
            <p className='footerItem contact'>contact@radiokhemir.fr</p>
            <div>
                <p className="footerItem firstItem">contact@radiokhemir.fr</p>
                <p className="footerItem">
                    <FormattedMessage id="creator" defaultMessage="made by Bassem Azizi"/>
                </p>
                <p className="footerItem">
                    <FormattedMessage id="allRights" defaultMessage="All rights are reserved ©"/>
                </p>
            </div> 
        </Container>
    )
}

export default Footer