import React from 'react'
import Metamask from '../assests/img/icon_metamask.png'
import Trustwallet from '../assests/img/icon_trustwallet.png'
import IconClose from '../assests/img/close_24px.png'
import Overlay from "./Overlay";
import styled from "styled-components";

const Wrapper = styled.div`
        background-color: #161824;
        width: 412px;
        position: absolute;
        text-align: center;
        border-radius: 16px;
        padding: 20px 24px 11px 24px;
        top: 100px;
        right: 250px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
    & > p {
        font-weight: bold;
        font-size: 18px;
    }

    & > img {
        cursor: pointer;
    }
`

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

export default function ConnectWalletPopover(props) {
    return (
        <Wrapper>
            <Head>
                <p>Connect to a Wallet</p>
                <img src={IconClose} onClick={props.onClose} alt="icon-close"></img>
            </Head>

            <Info>
                <p>Metamask</p>
                <img src={Metamask} alt="photos"></img>
            </Info>

            <Info>
                <p>Trustwallet</p>
                <img src={Trustwallet} alt="photos"></img>
            </Info>
        </Wrapper>
    )
}
