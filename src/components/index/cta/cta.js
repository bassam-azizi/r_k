import React, { useState } from 'react'
import Liveplayer from './livePlayer'
import { P , Pauseicon , Icon , Button , H1, BtnWrapper , Container, Wrapper } from './ctaStyle' 
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import Typical from 'react-typical'


const Cta = () => {
    const intl = useIntl();
    const [cast, castOn] = useState(false);
    {/*const a = <FormattedMessage id="our_content" defaultMessage={['News', 'Updates', 'Cultures', 'Business', 'Arts']}*/}
        // {intl.formattedMessage({
        //   id: "our_content",
        //   defaultMessage:"['News', 'Updates', 'Cultures', 'Business', 'Arts']"
        // })};
    return (
        <Wrapper cast={cast}>
            <Container cast={cast} locale={intl.locale}>
                <H1 locale={intl.locale} cast={cast}>
                    <FormattedMessage id="deliver" defaultMessage="We deliver " />{' '}
                    <Typical 
                            steps={[intl.formatMessage({id:"deliverableA"}), 4000,
                            intl.formatMessage({id:"deliverableB"}), 4000,
                            intl.formatMessage({id:"deliverableC"}), 4000,
                            intl.formatMessage({id:"deliverableD"}), 4000,
                            intl.formatMessage({id:"deliverableE"}), 3500]}
                    		loop={Infinity} 
                    		wrapper='span'
                    		/>
                </H1>
                <BtnWrapper>
                    <Button locale={intl.locale} onClick={() => castOn(!cast)} name="cta" types="button" cast={cast}> <Pauseicon cast={cast}/>  <p><FormattedMessage id="cta" defaultMessage="Launch Live Radio" /> <Icon locale={intl.locale}/> </p> </Button>
                    <Liveplayer cast={cast} />
                    <P cast={cast}><span>13h-14h </span>One Hour Sport with Fedi Arfaoui</P>
                </BtnWrapper>
            </Container>
        </Wrapper>
    )
}

export default Cta