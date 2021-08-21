import HeaderBackground from "../assests/img/header-background.png"
import LogoImg from "../assests/img/logo.png"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import BinanceIcon from '../assests/img/icon_binance.png'
// import PolygonIcon from '../assests/img/icon_polygon.png'
import Avatar from '../assests/img/icon-ava.png'
import SelectChainPopover from "./SelectChainPopover";
import { useState } from "react";
import WalletInfoPopover from "./WalletInfoPopover";
import ConnectWalletModal from "./ConnectWalletModal";
import MenuMobile from '../assests/img/menu_mobile.png'
import IconClose from '../assests/img/close_24px.png'
import ContainerStyled from "./ContainerStyled";
import { Menu } from 'antd';

const Wrapper = styled.header`
    background-image: ${props => props.isHome ? `url(${HeaderBackground})` : ""};
    background-size: 135% auto;
    background-repeat: no-repeat;
    background-position: -500px 77%;
    background-color: #0F1323;
    height: ${props => props.isHome ? "323px" : "120px"};

    @media only screen and (max-width: 768px) {
        height: ${props => props.isHome ? "227px" : "100px"};
    }
`;

const Logo = styled.img`
    height: 70px;
`;

const Menuu = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 768px) {
        & > .is-toggle {
			margin-right: 0px;
			z-index: 50;
		}
    }
`;

const Nav = styled(Menu)`
    background-color: transparent;
    border: none;
    display: flex;
    .ant-menu-item-selected {
        background-color: transparent !important;
    }

    @media only screen and (max-width: 768px) {
        position: fixed;
        width: 50%;
        height: 100vh;
        background-color: #1A1E30;
        display: block;
        top: 100px;
        right: 0;
        margin-right: -60%;
        transition: all 0.3s ease-out;
        padding-left: 20px;
        padding-top: 20px;
    }
`

const NavItemStyled = styled(Menu.Item)`
    margin: 0 !important;
    padding: 0 !important;
    margin-right: 60px !important;

    &:last-child {
        margin-right: 0;
    }

    a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: white;
    }

    a:hover {
        color: #FFB337;
    }

    &:first-child > a{
        color: #FFB337;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        margin-left: 15px;
        padding-top: 15px;
        padding-bottom: 15px;
        align-items: center;
        justify-content: flex-start;
        margin-right: 0;
        a {
            color: white;
            /* margin-top: 20px; */
        }
    }
`;

const ButtonConnect = styled(Button)`
    background: linear-gradient(89.99deg, #FFB337 9.74%, #EA891F 113.58%);
    color: black;
    font-size: 20px;
    font-weight: bold;
    
    @media only screen and (max-width: 768px) {
        font-size: 12px;
        font-weight: 600;
    }
`;

const Description = styled.p`
    margin: auto;
    margin-top: 43px;
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    max-width: 730px;

    @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        padding: 0 10px;
    }
`;

const ChainIcon = styled.div`
    position: relative;
    margin-right: 24px;
    & > img {
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        margin-right: 10px;
        & > img {
            height: 30px;
        }
    }
`

const ConnectWalletWrapper = styled.div`
    display: flex;
    align-items: center;

    & > img {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        padding-right: 10px;
        & > img {
            display: block;
            margin-left: 12px;
            z-index: 5;
        }
    }
`

const ButtonConnected = styled(Button)`
    background: transparent;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #FFB337;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 6px;

    img {
        margin-left: 11px;
    }

    @media only screen and (max-width: 768px) {
        font-size: 12px;

        & > img {
            height: 20px;
        }
    }
`

const WalletInfo = styled.div`
    position: relative;

    @media only screen and (max-width: 768px) {
        & > .WalletInfoPopover {
            right: -25px;
        }
    }
`

const OverlayMobile = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    z-index: 1;
    left: 0;
`


function Header(props) {
    const location = useLocation()
    const connected = true
    const [isShowSelectChain, setisShowSelectChain] = useState(false)
    const [isShowWalletInfo, setisShowWalletInfo] = useState(false)
    const [isShowConnectWallet, setisShowConnectWallet] = useState(false)
    const [toggleMenu, settoggleMenu] = useState(false)

    const onClickChain = () => {
        setisShowWalletInfo(false)
        setisShowSelectChain(!isShowSelectChain)
    }

    const onClickWallet = () => {
        setisShowSelectChain(false)
        setisShowWalletInfo(!isShowWalletInfo)
    }

    return (
        <Wrapper isHome={location.pathname === "/"}>
            <ContainerStyled>
                <Menuu>
                    <Link to="/"><Logo src={LogoImg} /></Link>
                    <Nav className={`nav ${toggleMenu ? 'is-toggle' : ''}`}>
                        <NavItemStyled key="1"><Link to="/">Marketplace</Link></NavItemStyled>
                        <NavItemStyled key="2"><a href="https://stake.demole.io" target="_blank" rel="noreferrer">Stake</a></NavItemStyled>
                        <NavItemStyled key="3"><a href="https://summon.demole.io" target="_blank" rel="noreferrer">Summon</a></NavItemStyled>
                        <NavItemStyled key="4"><a href="https://demole.io/faq" target="_blank" rel="noreferrer">FAQ</a></NavItemStyled>
                        <NavItemStyled key="5"><a href="https://demole.io" target="_blank" rel="noreferrer">Community</a></NavItemStyled>
                    </Nav>

                    <ConnectWalletWrapper>

                        <ChainIcon>
                            <img onClick={() => onClickChain()} src={BinanceIcon} alt="photos"></img>
                            {isShowSelectChain && <SelectChainPopover></SelectChainPopover>}
                        </ChainIcon>

                        {!connected && <ButtonConnect onClick={() => setisShowConnectWallet(true)} >Connect Wallet</ButtonConnect>}


                        {connected && <WalletInfo>
                            <ButtonConnected onClick={() => onClickWallet()}>
                                <p>163.92 DMLG</p>
                                <img src={Avatar} alt="photos"></img>
                            </ButtonConnected>

                            {isShowWalletInfo && <WalletInfoPopover></WalletInfoPopover>}
                        </WalletInfo>}

                        <img src={toggleMenu ? IconClose : MenuMobile} alt="photos" onClick={() => settoggleMenu(!toggleMenu)}></img>
                        {toggleMenu && <OverlayMobile></OverlayMobile>}
                    </ConnectWalletWrapper>

                </Menuu>

                {location.pathname === "/" && <Description>Welcome to “The Unicorn’s Horn market”, you can find the best things to prepare for you next hunting trip.</Description>}
            </ContainerStyled>
            {isShowConnectWallet && <ConnectWalletModal {...props} onClose={() => setisShowConnectWallet(false)}></ConnectWalletModal>}
        </Wrapper>
    )
}

export default Header