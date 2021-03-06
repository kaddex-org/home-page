import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  svg{
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
    height:200px;
    width:600px
    }
  }

`;

const Roadmap2021 = () => {
    return (
        <Container>
            <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="555.157" viewBox="0 0 1109 369">

                <g id="_2021" data-name="2021" transform="translate(12 -3656.001)">
                    <path id="Roadmap_line" d="M-6331.943-1552.257h1052.456a49.9,49.9,0,0,0,49.773-49.9v-35.175a49.9,49.9,0,0,0-49.773-49.9h-1046.4l1046.4.332a49.563,49.563,0,0,1,49.441,49.573v35.175a49.563,49.563,0,0,1-49.441,49.573C-6119.387-1552.589-6359.205-1552.257-6331.943-1552.257Z" transform="translate(6324.714 5352.241)" fill="none" stroke="#ec1bb4" stroke-width="4"/>
                    <g id="Institutional_Collaboration" data-name="Institutional  Collaboration" transform="translate(274 3791.001)">
                    <text id="Institutional_Collaboration-2" data-name="Institutional  Collaboration" transform="translate(0 39)" fill="#ec1bb4" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="700"><tspan x="0" y="0">Website v1 </tspan></text>
                    <circle id="Circle" cx="8" cy="8" r="8" fill="#ec1bb4"/>
                    </g>
                    <g id="Code_Auditing" data-name="Code Auditing" transform="translate(559 3791.001)">
                    <text id="Code_Auditing-2" data-name="Code Auditing" transform="translate(0 39)" fill="#ec1bb4" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="700"><tspan x="0" y="0">Tokenomics Deepdive </tspan></text>
                    <circle id="Circle-2" data-name="Circle" cx="8" cy="8" r="8" fill="#ec1bb4"/>
                    </g>
                    <g id="DEX_Lite_Paper" data-name="DEX Lite Paper" transform="translate(978.525 3790.591)">
                    <text id="DEX_Lite_Paper-2" data-name="DEX Lite Paper" transform="translate(-38.525 39.408)" fill="#ec1bb4" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="700"><tspan x="0" y="0">2M TVL </tspan><tspan x="0" y="26"></tspan></text>
                    <circle id="Circle-3" data-name="Circle" cx="8" cy="8" r="8" transform="translate(-38.525 0.41)" fill="#ec1bb4"/>
                    </g>
                    <line id="Active" x2="295" transform="translate(-12 3665.001)" fill="none" stroke="#ec1bb4" stroke-width="5"/>
                    <g id="Kaddex_Website_Refresh" data-name="Kaddex Website Refresh" transform="translate(873.699 3655.569)">
                        <text id="Kaddex_Website_Refresh-2" data-name="Kaddex Website Refresh" transform="translate(0.301 39.432)" fill="#ec1bb4" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="700"><tspan x="0" y="0">Kaddex Beta </tspan><tspan fontFamily={theme.fontFamily.regular} font-weight="500"><tspan x="0" y="26">live on mainnet </tspan></tspan></text>
                        <circle id="Circle-4" data-name="Circle" cx="8" cy="8" r="8" transform="translate(0.301 0.432)" fill="#ec1bb4"/>
                    </g>
                    <g id="Tokenomics_Deep_Drive" data-name="Tokenomics Deep Drive" transform="translate(577.422 3655.569)">
                        <text id="Tokenomics_Deep_Drive-2" data-name="Tokenomics Deep Drive" transform="translate(-0.421 39.432)" fill="#ec1bb4" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="700"><tspan x="0" y="0">Community Sale </tspan><tspan x="0" y="26"></tspan></text>
                        <circle id="Circle-5" data-name="Circle" cx="8" cy="8" r="8" transform="translate(-0.422 0.432)" fill="#ec1bb4"/>
                    </g>
                    <g id="Kaddex_Beta_on_MainNet" data-name="Kaddex Beta on MainNet" transform="translate(274.317 3655.569)">
                        <text id="Kaddex_Beta_on_MainNet-2" data-name="Kaddex Beta on MainNet" transform="translate(-0.317 24.432)" fill="#ec1bb4" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="700"><tspan x="0" y="15">Team Formation</tspan></text>
                    <g id="Circle-6" data-name="Circle" transform="translate(-0.317 0.432)" fill="#ec1bb4" stroke="#ec1bb4" stroke-width="8">
                        <circle cx="8" cy="8" r="8" stroke="none"/>
                        <circle cx="8" cy="8" r="4" fill="none"/>
                    </g>
                    </g>
                </g>
            </svg>
        </Container>
    );
};

export default Roadmap2021;