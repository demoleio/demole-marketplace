import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import MonsterImage from "../components/MonsterImage";
import MonsterInfo from "../components/MonsterInfo";
import Button from "../components/Button";
import { useState } from "react";
import BuyMonsterModal from "../components/BuyMonsterModal";
import MakeOfferModal from "../components/MakeOfferModal";
import { Row, Col } from 'antd';
import ContainerStyled from "../components/ContainerStyled";

const Wrapper = styled.section`
    background-color: #0F1323;
    min-height: 100vh;
    font-family: 'Georama', sans-serif;
    color: white;
`;

const WrapperBtn = styled.div`
    float: right;
    text-align: right;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    position: relative;
    top: 50px;
    z-index: 1;
    right: 10px;
`

const ButtonOffer = styled(Button)`
    background: transparent;
    color: #00CEFF;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid #00CEFF;

    @media only screen and (max-width: 768px) {
        font-weight: 600;
        font-size: 12px;
    }
`;

const ButtonBuy = styled(Button)`
    background: #00CEFF;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-left: 28px;

    @media only screen and (max-width: 768px) {
        font-weight: 600;
        font-size: 12px;
        margin-left: 16px;
    }
`;

export default function MonsterDetail() {

    const [isShowBuyMonster, setisShowBuyMonster] = useState(false)
    const [isShowMakeOffer, setisShowMakeOffer] = useState(false)


    return (
        <Wrapper>
            <Header />
            <ContainerStyled>
                <WrapperBtn>
                    <ButtonOffer onClick={() => setisShowMakeOffer(true)}>Make offer</ButtonOffer>
                    <ButtonBuy onClick={() => setisShowBuyMonster(true)}>Buy Now</ButtonBuy>
                </WrapperBtn>
                <div style={{ clear: "both" }}></div>
                <Row>
                    <Col md={12} xs={24}>
                        <MonsterImage></MonsterImage>
                    </Col>
                    <Col md={12} xs={24}>
                        <MonsterInfo></MonsterInfo>
                    </Col>
                </Row>
            </ContainerStyled>
            <Footer></Footer>

            {isShowBuyMonster && <BuyMonsterModal onClose={() => setisShowBuyMonster(false)}></BuyMonsterModal>}
            {isShowMakeOffer && <MakeOfferModal onClose={() => setisShowMakeOffer(false)}></MakeOfferModal>}
        </Wrapper>
    )
}
