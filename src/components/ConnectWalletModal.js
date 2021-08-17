import React from 'react'
import Metamask from '../assests/img/icon_metamask.png'
import Trustwallet from '../assests/img/icon_trustwallet.png'
import IconClose from '../assests/img/close_24px.png'
import Overlay from "./Overlay";
import styled from "styled-components";

const Wrapper = styled(Overlay)`
    .connect-wallet {
        background-color: #161824;
        width: 412px;
        height: auto;
        margin: 30vh auto 0px;
        position: relative;
        text-align: center;
        border-radius: 16px;
        padding: 20px 24px 11px 24px;
        .head {
            margin-bottom: 36px;
        }
    }
`;

const Info = styled.div`
    padding: 20px;
    border: 1px solid #00CEFF;
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    cursor: pointer;

    & > p {
        font-weight: bold;
        font-size: 18px;
    }
`

export default function ConnectWalletModal(props) {
    return (


        <Wrapper>
            <div className="wrapper">
                <div className="dark-range" onClick={props.onClose}></div>
                <div className="connect-wallet">
                    <div className="head">
                        <p>Connect to a Wallet</p>
                        <img src={IconClose} onClick={props.onClose} alt="icon-close"></img>
                    </div>

                    <Info>
                        <p>Metamask</p>
                        <img src={Metamask} alt="photos"></img>
                    </Info>

                    <Info>
                        <p>Trustwallet</p>
                        <img src={Trustwallet} alt="photos"></img>
                    </Info>
                </div>
            </div>
        </Wrapper>
    )
}
