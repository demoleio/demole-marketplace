import styled from "styled-components";
import BackIcon from '../assests/img/icon_back.png'
import Dragon from '../assests/img/dragon2.png'
import BucDung from '../assests/img/buc_dung.png'
import Avatar from '../assests/img/icon-ava.png'
import Button from "./Button";
import { useState, useEffect } from "react";
import BuyMonsterModal from "./BuyMonsterModal";
import MakeOfferModal from "./MakeOfferModal";

const Wrapper = styled.div`
    min-height: 100vh;
    position: fixed;
    top: 150px;

    @media only screen and (max-width: 768px) {
        position: initial;
        min-height: fit-content;
    }
`;

const WrapperImage = styled.div`
    margin-top: -100px;
    background-image: radial-gradient(46.9% 46.9% at 49.88% 50.12%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.25) 0.01%, rgba(255, 255, 255, 0) 107.22%);
    height: 593px;
    width: 593px;
    position: relative;

    img:first-child {
        position: absolute;
        bottom: 100px;
        left: 150px;
        z-index: 1;

    }

    img:last-child {
        position: absolute;
        bottom: 0;
        left: 50px;
    }
   

    @media only screen and (max-width: 768px) {
        margin-top: -50px;
        width: 100%;
        background-image: radial-gradient(46.9% 46.9% at 49.88% 50.12%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.25) 0.01%, rgba(255, 255, 255, 0) 107.22%);
       
        img:first-child {
            width: 265px;
            bottom: 40px;
            left: 80px;

        }

        img:last-child {
            width: 302px;
            left: 30px;
            bottom: -30px;
        }

    }
`

const Price = styled.div`
    background: #1A1E30;
    border: 1px solid #292F49;
    border-radius: 12px;
    box-shadow: 0px 0px 2px 6px #1A1E30;
    margin-top: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 19px 52px;

    & > p {
        color: #AFB9CF;
        font-weight: 600;
        font-size: 32px;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-weight: bold;
            font-size: 48px;
            margin-left: 20px;
            line-height: 48px;
        }
    }

    @media only screen and (max-width: 576px) {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        padding: 10px 20px;
        /* margin-top: 50px; */
        & > p {
            font-size: 20px;
        }

        & > div {
            p {
                font-size: 28px;
                margin-left: 20px;
                line-height: 48px;
            }
        }

    }
`

const Back = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    & > p {
        font-weight: 600;
        font-size: 20px;
        text-transform: uppercase;
        margin-left: 9px;
    }

    @media only screen and (max-width: 768px) {
        & > p {
            font-size: 14px;
        }

        & > img {
            height: 10px;
        }
    }
`

const WrapperInfo = styled.div`
    & > .left{
        & > span {
            margin-top: 23px;
            margin-bottom: 8px;
            background: #EA6565;
            border-radius: 4px;
            padding: 2px 12px;
            font-size: 18px;
            display: block;
            width: 92px;
            line-height: 26px;
        }

        & > p {
            font-size: 64px;
            line-height: 74px;
            text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.25);
            font-family: "EvilEmpire";
        }
    }

    & > .right {
        display: none;
    }

    @media only screen and (max-width: 576px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > .left{ 
            & > span {
                font-weight: 600;
                font-size: 12px;
                line-height: 20px;
                width: 69px;
            }

            & > p {
                font-size: 36px;
                line-height: 41px;
            }
        }

        & > .right {
            display: block;
            text-align: right;
            margin-top: 48px;

            & > div {
                display: flex;
                justify-content: flex-end;

                & > p {
                    font-weight: bold;
                    font-size: 18px;
                }

                & > img {
                    width: 30px;
                    margin-left: 8px;
                }
            }

            & > span {
                font-weight: 600;
                font-size: 12px;
                color: #9298AB;
            }

            & > p {
                font-size: 12px;
                margin-top: 8px;
                & > span {
                    font-weight: bold;
                    font-size: 12px;
                    margin-left: 8px;
                }
            }
        }
    }

`
export default function MonsterImage() {
    useEffect(() => {
        const wrapperImage = document.getElementsByClassName("wrapper-image")[0]
        wrapperImage.style.height = wrapperImage.clientWidth + "px"
    }, [])

    return (
        <Wrapper>
            <WrapperInfo>
                <div className="left">
                    <Back>
                        <img src={BackIcon} alt="photos"></img>
                        <p>Back</p>
                    </Back>

                    <span>#18879</span>

                    <p>DRAGON</p>
                </div>

                <div className="right">
                    <div>
                        <p>0.534</p>
                        <img src={Avatar} alt="photos"></img>
                    </div>

                    <p>Floor Price: <span>0.11 BNB</span></p>
                    <span>~$31.2</span>
                </div>
            </WrapperInfo>

            <WrapperImage className="wrapper-image" >
                <img src={Dragon} alt="photos"></img>
                <img src={BucDung} alt="photos"></img>
            </WrapperImage>

            <Price>
                <div>
                    <img src={Avatar} alt="photos"></img>
                    <p>0.534</p>
                </div>

                <p>~$310.2</p>
            </Price>
        </Wrapper>
    )
}
