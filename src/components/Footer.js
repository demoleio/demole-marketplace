import styled from "styled-components";
import telegram from '../assests/img/telegram.png'
import medium from '../assests/img/medium.png'
import twitter from '../assests/img/twitter.png'
import discord from '../assests/img/discord.png'
import { Container } from "react-bootstrap";

const Wrapper = styled.footer`
    border-top: 1px solid #292F49;
    position: relative;
    z-index: 3;
    background-color: #0F1323;
`;

const ContainerStyled = styled(Container)`
    @media (min-width: 1288px) {
        width: 1288px;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 80px 30px;

    @media only screen and (max-width: 768px) {
        display: block;
        padding: 0;
        text-align: center;
    }

`

const Title = styled.div`
    text-align: right;
    margin-right: 235px;
    & > p {
        font-size: 72px;
        font-family: "EvilEmpire";
        line-height: 83px;
        letter-spacing: 5px;
    }

    & > span {
        font-size: 20px;
        line-height: 28px;
        font-weight: bold;
    }

    @media only screen and (max-width: 768px) {
        display: block;
        margin: 0;
        text-align: center;
        margin-top: 36px;
        & > p {
            font-size: 36px;
            line-height: 41px;
        }

        & > span {
            font-weight: 600;
            font-size: 12px;
            line-height: 24px;
        }

    }
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    & > div {
        margin-right: 80px;
        p {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 18px;
        }
        span {
            display: block;
            margin-bottom: 10px;

            img {
                margin-right: 12px;
                width: 20px;
            }

        }

        &:last-child {
            margin-right: 0px;
        }
    }

    
    @media only screen and (max-width: 768px) {
        display: block;
        margin-top: 36px;
        & > div {
            margin: 0;
            p {
                font-size: 18px;
                margin-bottom: 17px;
            }
            span {
                display: none;
            }

            &:last-child {
                margin-right: 0px;
            }
        }
    }

`

const WrapperIcon = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
        padding-bottom: 65px;

        & > img {
            margin-right: 24px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
`

export default function Footer() {
    return (
        <Wrapper>
            <ContainerStyled>
                <Content>
                    <Title>
                        <p>DEMOLE.IO</p>
                        <span>Defi Monster Legends</span>
                    </Title>

                    <Info>
                        <div>
                            <p>DEMOLE</p>
                            <span>Project Overview</span>
                            <span>Token Metrics</span>
                            <span>Gameplay</span>
                        </div>

                        <div>
                            <p>FAQ</p>
                            <span>Disclaimer</span>
                            <span>Disclaimer</span>
                            <span>Token Address</span>
                        </div>

                        <div>
                            <p>SOCIAL</p>
                            <span><img src={telegram} alt="photos"></img>Telegram</span>
                            <span><img src={medium} alt="photos"></img>Medium</span>
                            <span><img src={twitter} alt="photos"></img>Twitter</span>
                            <span><img src={discord} alt="photos"></img>Discord</span>
                        </div>
                    </Info>

                    <WrapperIcon>
                        <img src={telegram} alt="photos"></img>
                        <img src={medium} alt="photos"></img>
                        <img src={twitter} alt="photos"></img>
                        <img src={discord} alt="photos"></img>
                    </WrapperIcon>
                </Content>
            </ContainerStyled>
        </Wrapper>
    )
}
