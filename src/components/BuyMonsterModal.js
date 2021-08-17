import IconClose from '../assests/img/close_24px.png'
import Modal from "./Modal";
import styled from "styled-components";
import Character from './Character';
import Button from "./Button";

const Wrapper = styled(Modal)`
    .buy-monster {
        background-color: #161824;
        width: 367px;
        height: auto;
        margin: 150px auto 0px;
        position: relative;
        text-align: center;
        border-radius: 16px;
        padding: 32px;

        .head {
            p {
                font-weight: bold;
                font-size: 24px
            }
        }
        
    }
`;

const ButtonBuy = styled(Button)`
    background: #00CEFF;
    color: white;
    font-size: 16px;
    width: 100%;
    margin: 0;
    margin-top: 7px;
`;

const Price = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 24px;
    border-bottom: 1px solid #292F49;
    padding-bottom: 20px;

    & > p {
        font-weight: bold;
        font-size: 18px;
    }

    & > div {
        text-align: right;

        & > p {
            font-weight: bold;
            font-size: 18px;
            line-height: 26px;
        }

        & > span {
            font-size: 18px;
            color: #AFB9CF;
            line-height: 26px;
        }
    }
`

const ErrorText = styled.p`
    color: #EB526C;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    margin-top: 20px;
    margin-bottom: -13px;
`

export default function BuyMonsterModal(props) {
    const err = 'Insufficient BNB balance'
    return (
        <Wrapper>
            <div className="wrapper">
                <div className="dark-range" onClick={props.onClose}></div>
                <div className="buy-monster">
                    <div className="head">
                        <p>BUY MONSTER</p>
                        <img src={IconClose} onClick={props.onClose} alt="icon-close"></img>
                    </div>

                    <Character notShowPrice={true} customHeight="278px"></Character>

                    <Price>
                        <p>Price:</p>
                        <div>
                            <p>0.327 BNB</p>
                            <span>$210.9</span>
                        </div>
                    </Price>

                    {err && <ErrorText>{err}</ErrorText>}

                    <Price style={{marginTop: '20px', border: '0'}}>
                        <p>Your Balance:</p>
                        <div>
                            <p>1 BNB</p>
                            <span>$210.9</span>
                        </div>
                    </Price>

                    <ButtonBuy>Buy</ButtonBuy>

                </div>
            </div>
        </Wrapper>
    )
}
