import styled from "styled-components";
import Battle from '../assests/img/battle.png'
import Lighting from '../assests/img/lighting.png'
import VectorDown from '../assests/img/VectorDown.png'
import { useState } from "react";
import Table from "./Table";
import Card from "./Card";
import BuyMonsterModal from "./BuyMonsterModal";
import MakeOfferModal from "./MakeOfferModal";

const Wrapper = styled.div`
    min-height: 100vh;
    padding: 52px 10px;

    @media only screen and (max-width: 768px) {
        min-height: fit-content;
        padding: 52px 10px;
    }
`;

const AboutCard = styled(Card)`
    padding-left: 70px;
    padding-right: 70px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
   
    div {
        width: calc(100% / 3);
        text-align: center;
        margin-bottom: 40px;
        span {
            font-weight: 600;
            font-size: 16px;
            color: #9298AB;
        }

        p {
            font-weight: bold;
            font-size: 24px;
        }

        &:last-child {
            width: 100%;
            margin-bottom: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 24px;

        & > div {
            margin-bottom: 0;

            span {
                font-size: 12px;
            }

            p {
                font-size: 18px;
            }

            &:last-child{
                display: none;
            }
        }
    }
`

const StatsCard = styled(Card)`
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
   
    & > div {
        width: calc(100% / 3);
        text-align: center;
        margin-bottom: 36px;
        span {
            font-weight: 600;
            font-size: 16px;
            color: #9298AB;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            p {
                font-weight: bold;
                font-size: 24px;
                margin-right: 8px;
            }
        }

        &:nth-child(4), &:nth-child(5) {
            width: calc(100% / 2);
            margin-bottom: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        & > div {
            margin-bottom: 25px;
            & > span {
                font-size: 12px;
            }
        }
    }
`

const BodyCard = styled(Card)`
    padding: 12px 50px 44px 50px;
    display: flex;
    flex-wrap: wrap;
    

    & > div {
        display: flex;
        align-items: center;
        width: calc(50% - 6px);
        margin: 32px 12px 0 0;
        .hinhtron {
            width: 60px;
            height: 60px;
            background: #F07B7B;
            border-radius: 50%;
            margin-right: 18px;
        }

        .info{
            p {
                font-size: 18px;
            }

            span {
                font-size: 16px;
                margin-top: 6px;
                display: block;
                color: #CC90F0;
            }
        }

        &:nth-child(even) {
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 0 20px 20px 20px;
        & > div {
            margin-top: 20px;
            .hinhtron {
                width: 36px;
                height: 36px;
                margin-right: 8px;
            }
            .info{
                p {
                    font-size: 12px;
                }

                span {
                    font-size: 12px;
                    margin-top: 0px;
                }
            }
        }
    }
`

const Tab = styled.div`
    display: flex;
    margin-bottom: 28px;
    margin-top: 68px;

    & > p {
        font-family: "EvilEmpire";
        font-size: 36px;
        width: 200px;
        text-align: center;
        cursor: pointer;
        line-height: 41px;
        text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.25);
    }

    .selected {
        color: #FFB337;
        border-bottom: 3px solid #FFB337;
    }

    @media only screen and (max-width: 768px) {
        margin-top: 0px;
        & > p {
            width: 171px;
            font-size: 24px;
            line-height: 28px;
        }
    }
`
export default function MonsterInfo() {
    const [showOfferTable, setshowOfferTable] = useState(true)

    const tableOfferItems = [
        {
            address: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
    ]

    const tableHistoryItems = [
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
        {
            address: '0xcbu78eyu...2bf2',
            to: '0xcbu78eyu...2bf2',
            price: '0.05',
            time: '2d ago'
        },
    ]

    const [isShowBuyMonster, setisShowBuyMonster] = useState(false)
    const [isShowMakeOffer, setisShowMakeOffer] = useState(false)

    return (
        <Wrapper>
            {/* <WrapperBtn>
                <ButtonOffer onClick={() => setisShowMakeOffer(true)}>Make offer</ButtonOffer>
                <ButtonBuy onClick={() => setisShowBuyMonster(true)}>Buy Now</ButtonBuy>
            </WrapperBtn> */}

            <AboutCard header="About">
                <div>
                    <span>Tribes</span>
                    <p>Knight</p>
                </div>
                <div>
                    <span>Level</span>
                    <p>1</p>
                </div>
                <div>
                    <span>Element</span>
                    <p>Thunder</p>
                </div>
                <div>
                    <span>Current owner</span>
                    <p>Hoen ( 0xca41405fb...39ce)</p>
                </div>
            </AboutCard>

            <StatsCard header="Stats (28)" headerRight="Detail">
                <div>
                    <span>Attack</span>
                    <div>
                        <p>8</p>
                        <img src={Battle} alt="photos"></img>
                    </div>
                </div>
                <div>
                    <span>Speed</span>
                    <div>
                        <p>1</p>
                        <img src={Lighting} alt="photos"></img>
                    </div>
                </div>
                <div>
                    <span>Hitpoints</span>
                    <div>
                        <p>5</p>
                        <img src={Lighting} alt="photos"></img>
                    </div>
                </div>

                <div>
                    <span>Critical chance</span>
                    <div>
                        <p>7</p>
                        <img src={Lighting} alt="photos"></img>
                    </div>
                </div>
                <div>
                    <span>Critical damage</span>
                    <div>
                        <p>7</p>
                        <img src={Lighting} alt="photos"></img>
                    </div>
                </div>
            </StatsCard>


            <BodyCard header="Body Parts">
                <div>
                    <div className="hinhtron"></div>
                    <div className="info">
                        <p>Body Ribcage</p>
                        <span>Epic</span>
                    </div>
                </div>
                <div>
                    <div className="hinhtron"></div>
                    <div className="info">
                        <p>Body Ribcage</p>
                        <span>Common</span>
                    </div>
                </div>
                <div>
                    <div className="hinhtron"> </div>
                    <div className="info">
                        <p>Body Ribcage</p>
                        <span>Rare</span>
                    </div>
                </div>
                <div>
                    <div className="hinhtron"></div>
                    <div className="info">
                        <p>Body Ribcage</p>
                        <span>Common</span>
                    </div>
                </div>
                <div>
                    <div className="hinhtron"></div>
                    <div className="info">
                        <p>Body Ribcage</p>
                        <span>Common</span>
                    </div>
                </div>
                <div>
                    <div className="hinhtron"></div>
                    <div className="info">
                        <p>Body Ribcage</p>
                        <span>Epic</span>
                    </div>
                </div>
            </BodyCard>

            <Tab>
                <p onClick={() => setshowOfferTable(true)} className={`${showOfferTable ? "selected" : ""}`}>offer</p>
                <p onClick={() => setshowOfferTable(false)} className={`${showOfferTable ? "" : "selected"}`}>HISTORY</p>
            </Tab>

            {showOfferTable && <Table>
                <div className="wrapper-table" style={{minWidth: 500}}>
                    <div className="table-title">
                        <div>
                            <p>From</p>
                            <img src={VectorDown} alt="photos"></img>
                        </div>
                        <div>
                            <p>Price</p>
                            <img src={VectorDown} alt="photos"></img>
                        </div>
                        <div>
                            <p>Time</p>
                            <img src={VectorDown} alt="photos"></img>
                        </div>
                    </div>

                    <div className="table-item">
                        {tableOfferItems.map((value, index) => {
                            return (
                                <div key={index} className={`${index % 2 === 0 ? "row-even" : ""} table-row`}>
                                    <a href="/">{value.address}</a>
                                    <p>{value.price}</p>
                                    <p>{value.time}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Table>}


            {!showOfferTable && <Table>
                <div className="wrapper-table" style={{minWidth: 600}}>
                    <div className="table-title">
                        <div>
                            <p>From</p>
                            <img src={VectorDown} alt="photos"></img>
                        </div>
                        <div style={{ flex: 2 }}>
                            <p>To</p>
                            <img src={VectorDown} alt="photos"></img>
                        </div>
                        <div>
                            <p>Price</p>
                            <img src={VectorDown} alt="photos"></img>
                        </div>
                        <div>
                            <p>Time</p>
                            <img src={VectorDown} alt="photos"></img>
                        </div>
                    </div>
                    <div className="table-item">
                        {tableHistoryItems.map((value, index) => {
                            return (
                                <div key={index} className={`${index % 2 === 0 ? "row-even" : ""} table-row`}>
                                    <a href="/">{value.address}</a>
                                    <a href="/">{value.to}</a>
                                    <p>{value.price}</p>
                                    <p>{value.time}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </Table>}

            {isShowBuyMonster && <BuyMonsterModal onClose={() => setisShowBuyMonster(false)}></BuyMonsterModal>}
            {isShowMakeOffer && <MakeOfferModal onClose={() => setisShowMakeOffer(false)}></MakeOfferModal>}
        </Wrapper>
    )
}
