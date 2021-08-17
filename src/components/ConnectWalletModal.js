import React, { useEffect, useRef } from 'react'
import Metamask from '../assests/img/icon_metamask.png'
import Trustwallet from '../assests/img/icon_trustwallet.png'
import WalletConnect from '../assests/img/icon_walletconnect.svg'
import IconClose from '../assests/img/close_24px.png'
import Overlay from "./Overlay";
import styled from "styled-components";

const Wrapper = styled(Overlay)`
    .connect-wallet {
        overflow: hidden;
        background-color: #161824;
        width: 412px;
        height: auto;
        margin: 30vh auto 0px;
        position: relative;
        text-align: center;
        border-radius: 16px;
        padding: 20px 24px 11px 24px;
        transform-origin: center;
        .head {
            margin-bottom: 36px;
        }
    }
`;

const Info = styled.div`
    padding: 14px 25px;
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
    const modalBodyRef = useRef(null)

    useEffect(() => {
        const modalHeight = modalBodyRef.current.clientHeight
        modalBodyRef.current.style.height = "0px"
        modalBodyRef.current.style.transition = `height 0.6s ease`
        setTimeout( () => {
            modalBodyRef.current.style.height = `${modalHeight}px`
        }, 100) 
    }, []);

    return (
        <Wrapper>
            <div className="wrapper">
                <div className="dark-range" onClick={props.onClose}></div>
                <div className="connect-wallet" ref={modalBodyRef}>
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

                    <Info>
                        <p>WalletConnect</p>
                        <img src={WalletConnect} alt="photos" width="32"></img>
                    </Info>
                </div>
            </div>
        </Wrapper>
    )
}
