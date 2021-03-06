import { createGlobalStyle } from 'styled-components'


const PlayerStyleA = createGlobalStyle`
            .rhap_container {
                width: 558px;
                padding: 0;
                height: 71px;
                border: 0.7px solid #22222245;
            }
            .rhap_main {
                  justify-content: normal;
            }
            .rhap_controls-section {
                  flex: 1 1 auto;
                  margin: 0;
                  position: relative;
            }
            .rhap_main-controls {
                  height: 100%;
                  padding: 0 10px;
                  background-color: #222;
                  width: 85px;
            }
            .rhap_play-pause-button {
                  font-size: 0;
            }
            .rhap_main-controls svg {
                  width: 29px;
                  height: 29px;
            }
            .rhap_button-clear {
                  overflow: visible;
            }

            .rhap_horizontal-reverse .rhap_controls-section{
                  margin: 0;
            }

// the volume section controls  **********
            .rhap_volume-controls {
                  justify-content: flex-start;
                  flex: 0 0 none;
                  margin-left: 22px;
                  width: 75px;
            }
            .rhap_volume-button {
                  width: 40px;
                  // height: 40px;
                  padding-left: 7px;
                  color: #444;
            }
            .rhap_progress-section {
                  flex: 0 0 auto;
            }
            
// the bar progress
            .rhap_progress-container {
                  position: absolute;
                  left: 100px;
                  width: 65%;
            }
            .rhap_progress-indicator {
                  display: none;
            }
            .rhap_progress-bar {
                  opacity: 0.2;
                  height: 71px;
            }

            .rhap_time {
                  width: 81px;
                  text-align: center;
            }
            .rhap_volume-indicator {
                  width: 4px;
                  background: #444;
            }
`

export default PlayerStyleA
