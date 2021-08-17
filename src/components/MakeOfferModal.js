import IconClose from '../assests/img/close_24px.png'
import Modal from "./Modal";
import styled from "styled-components";
import Button from "./Button";
import Character from './Character';
import Input from "./Input"

const Wrapper = styled(Modal)`
    .make-offer {
        background-color: #161824;
        width: 755px;
        height: auto;
        margin: 150px auto 0px;
        position: relative;
        text-align: center;
        border-radius: 16px;
        padding: 32px;

        .head {
            margin-bottom: 24px;
            & > p {
                font-weight: bold;
                font-size: 24px
            }
        }
        
    }
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

const ButtonOffer = styled(Button)`
    background: #00CEFF;
    color: white;
    font-size: 16px;
    width: 312px;
    margin: 0;
`;

const ButtonCancel = styled(Button)`
    background-color: transparent;
    color: #00CEFF;
    font-size: 16px;
    margin: 0;
    border: 1px solid #00CEFF;
    width: 146px;

`

const WrapperBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 27px;
    border-top: 1px solid #292F49;
    margin-top: 27px;
`

const WrapperInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .Character {
        width: 312px;
    }
    
    & > div {
        width: 312px;
    }
  
`

const WrapperInput = styled.div`
    text-align: left;
    margin-top: 20px;
    & > p {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 8px;
    }
`

const ErrorText = styled.p`
    color: #EB526C;
    font-size: 12px !important;
    font-weight: normal !important;
    text-align: left;
    line-height: 20px;
    margin-top: 2px;
`
export default function MakeOfferModal(props) {
    const err = 'Your offer must be higher than current offer.'
    return (
        <Wrapper>
            <div className="wrapper">
                <div className="dark-range" onClick={props.onClose}></div>
                <div className="make-offer">
                    <div className="head">
                        <p>MAKE OFFER</p>
                        <img src={IconClose} onClick={props.onClose} alt="icon-close"></img>
                    </div>

                    <WrapperInfo>
                        <Character className="Character" notShowPrice={true} customHeight="282px"></Character>

                        <div>
                            <Price>
                                <p>Price:</p>
                                <div>
                                    <p>0.327 BNB</p>
                                    <span>$210.9</span>
                                </div>
                            </Price>

                            <Price>
                                <p>Current offer:</p>
                                <div>
                                    <p>1 BNB</p>
                                    <span>$210.9</span>
                                </div>
                            </Price>

                            <WrapperInput>
                                <p>Your offer </p>
                                <Input style={{border: `${err ? '1px solid #EB526C' : ""}`}} placeholder="0.82 BNB" />
                                {err && <ErrorText>{err}</ErrorText>}
                            </WrapperInput>
                        </div>
                    </WrapperInfo>

                    <WrapperBtn>
                        <ButtonCancel>Cancel</ButtonCancel>
                        <ButtonOffer>OFFER</ButtonOffer>
                    </WrapperBtn>
                </div>
            </div>
        </Wrapper>
    )
}
