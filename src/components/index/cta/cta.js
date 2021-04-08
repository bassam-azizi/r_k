import React, { useState } from 'react'
import Liveplayer from './livePlayer'
import { P , Pauseicon , Icon , Button , H1, Wrapper } from './ctaStyle' 
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
            <H1>
            <FormattedMessage id="deliver" defaultMessage="We deliver" />{' '}
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
            <Button onClick={() => castOn(!cast)} name="cta" types="button" cast={cast}> <Pauseicon cast={cast}/>  <p><FormattedMessage id="cta" defaultMessage="Launch Live Radio" /> <Icon /> </p> </Button>
            <Liveplayer cast={cast} />
            <P cast={cast}><span>13h-14h </span>One Hour Sport with Fedi Arfaoui</P>
        </Wrapper>
    )
}

export default Cta