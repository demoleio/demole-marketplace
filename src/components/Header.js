import { Container, Nav, NavItem } from "react-bootstrap"
import HeaderBackground from "../assests/img/header-background.png"
import LogoImg from "../assests/img/logo.png"
import styled from "styled-components"
import { Link } from "react-router-dom";
import Button from "./Button";

const Wrapper = styled.header`
    background-image: url(${HeaderBackground});
    background-size: 135% auto;
    background-repeat: no-repeat;
    background-position: -500px 77%;
    background-color: #0F1323;
    height: 323px;
`;

const ContainerStyled = styled(Container)`
    @media (min-width: 1288px) {
        width: 1288px;
    }
`;

const Logo = styled.img`
    height: 70px;
`;

const Menu = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItemStyled = styled(NavItem)`
    margin-right: 60px;

    &:last-child {
        margin-right: 0;
    }

    & > a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: white;
    }

    & > a:hover {
        color: #FFB337;
    }

    &:first-child > a{
        color: #FFB337;
    }
`;

const ButtonConnect = styled(Button)`
    background: linear-gradient(89.99deg, #FFB337 9.74%, #EA891F 113.58%);
    color: black;
    font-size: 20px;
    font-weight: bold;
`;

const Description = styled.p`
    margin: auto;
    margin-top: 70px;
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    max-width: 730px;
`;

function Header() {
    return (
        <Wrapper>
            <ContainerStyled>
                <Menu>
                    <Link to="/"><Logo src={LogoImg} /></Link>
                    <Nav>
                        <NavItemStyled><Link to="/">Marketplace</Link></NavItemStyled>
                        <NavItemStyled><a href="https://stake.demole.io" target="_blank" rel="noreferrer">Stake</a></NavItemStyled>
                        <NavItemStyled><a href="https://summon.demole.io" target="_blank" rel="noreferrer">Summon</a></NavItemStyled>
                        <NavItemStyled><a href="https://demole.io/faq" target="_blank" rel="noreferrer">FAQ</a></NavItemStyled>
                        <NavItemStyled><a href="https://demole.io" target="_blank" rel="noreferrer">Community</a></NavItemStyled>
                    </Nav>
                    <ButtonConnect>Connect Wallet</ButtonConnect>
                </Menu>

                <Description>Welcome to “The Unicorn’s Horn market”, you can find the best things to prepare for you next hunting trip.</Description>
            </ContainerStyled>
        </Wrapper>
    )
}

export default Header