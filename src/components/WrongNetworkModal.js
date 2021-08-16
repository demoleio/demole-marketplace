import Overlay from "./Overlay";
import styled from "styled-components";
import Load from '../assests/img/load.png'

const Wrapper = styled(Overlay)`
    .wrong-network {
        background-color: #161824;
        width: 563px;
        height: auto;
        margin: 30vh auto 0px;
        position: relative;
        text-align: center;
        border-radius: 16px;
        padding: 40px;

        & > p {
            margin-top: 27px;
            font-weight: bold;
            font-size: 36px;
        }

        & > span {
            font-size: 16px;
            color: #AFB9CF;
            display: block;
            margin-top: 20px;
            padding-left: 18px;
            padding-right: 18px;
        }
    }
`;

export default function WrongNetworkModal(props) {
    return (
        <Wrapper>
            <div className="wrapper">
                <div className="dark-range" onClick={props.onClose}></div>
                <div className="wrong-network">
                    <img src={Load} alt="photos"></img>
                    <p>Wrong Net Work Connected!</p>
                    <span>Demole is currently on Binance mode but your Metamask is connected to another network. Please change the network on your Metamask settings.</span>

                </div>
            </div>
        </Wrapper>
    )
}
