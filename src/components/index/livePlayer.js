import React from 'react'
import AudioPlayer , {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Pause } from 'react-icons/all'

import Styled from '@emotion/styled'


const Wrapper = Styled.div`
    display: flex;
`
const Progress_bar = Styled.div`
    display: flex;
`
const Pause = Styled(Pause)`
    color: green;
` 
const BarContainer = Styled.div`
    height: 20px;
    background-color: green;
`
const Bar = Styled.div`
    height: 2px;
    background-color: #fff;
`
const Timer = Styled.p`
    overflow: hidden;
`

const Liveplayer = () =>{
    return(
        <Wrapper>
            <Progress_bar>
                <Pause />
                <BarContainer>
                    <Bar>bar</Bar>
                    <Timer>time</Timer>
                </BarContainer>
            </Progress_bar>
            <AudioPlayer  
                src={} 
                customProgressBarSection={[]}
                customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
                customAdditionalControls={[]}
                showJumpControls={false}
                layout="horizontal-reverse"
            />

        </Wrapper>
    )
}

export default Liveplayer