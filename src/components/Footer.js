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
            }

        }

        &:last-child {
            margin-right: 0px;
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
                </Content>

            </ContainerStyled>


        </Wrapper>
    )
}
