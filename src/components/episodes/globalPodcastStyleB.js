import { createGlobalStyle } from 'styled-components'


const PlayerStyleB = createGlobalStyle`
            .rhap_container {
                width: 308px; 
                padding: 0;
                box-shadow: none;
                  
                  @media (max-width: 320px){
                        width: 268px;
                  }
            }

            .rhap_stacked-reverse .rhap_controls-section{
                  margin: 0;
            }
            .rhap_controls-section {
                  flex: 1 1 auto;
                  position: relative;
                  border: .5px solid #222;
                  height: 71px;
                  border: 0.7px solid #22222245;
            }
            .rhap_stacked .rhap_controls-section{
                  margin: 0;
            }
            .rhap_main-controls {
                  height: 100%;
                  width: 87px;
                  padding: 0;
                  background-color: #222;
                  border: 0.7px solid #22222245;

            }
            // .rhap_play-pause-button {
            //       font-size: 0;
            // }
            .rhap_main-controls svg {
                  width: 29px;
                  height: 29px;
            }
            .rhap_button-clear {
                  // overflow: visible;
                  height: 62.7px;
            
      }
            // // the volume section controls  **********

            .rhap_volume-container{
                  margin-left: 15px;
            }
            .rhap_volume-controls {
                  justify-content: flex-start;
                  flex: 0 0 none;
            }
            .rhap_volume-button {
                  width: 40px;
                  height: 40px;
                  // padding-left: 7px;
                  color: #444;
            }
            .rhap_volume-bar-area{
                  height: 10px;  
                  align-items: normal;   
            }
            .rhap_progress-section {
            //       flex: 0 0 auto;
                  justify-content: right;

            }
            // the bar progress
            .rhap_progress-container {
                  position: absolute;
                  left: 1px;
                  width: 65%;
            }
            .rhap_progress-indicator {
                  display: none;
            }
            .rhap_progress-bar {
                  opacity: 0.2;
                  height: 71px;
            }

            .rhap_time{
                  width: 81px;
                  text-align: center; 
            }
            .rhap_current-time {
                  padding: 24px;
                  border: 0.7px solid #22222245;
                  border-bottom: none;
            }
            .rhap_volume-indicator {
                  width: 4px;
                  background: #444;
            }
`

export default PlayerStyleB
