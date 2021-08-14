import styled from "styled-components";
import Avatar from '../assests/img/icon-ava.png'
import SettingIcon from '../assests/img/settings.svg'

const Wrapper = styled.div`

    background: #1A1E30;
    border: 1px solid #292F49;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 24px;
    position: absolute;
    top: 60px;
    right: 0px;
    width: 344px;

    
    & > p {
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 16px;
    }
   
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;


    div {
        margin: 0 15px;

        p:first-child {
            font-weight: bold;
            font-size: 18px;
        }

        p:last-child {
            font-weight: 600;
            font-size: 12px;
            color: #9298AB;

            span {
                font-size: 18px;
            }
        }
    }
`

const Menu = styled.ul`
    border-top: 1px solid #292F49;

    li {
        font-weight: 600;
        font-size: 16px;
        margin-top: 16px;
    }
`

export default function WalletInfoPopover() {
    return (
        <Wrapper>
            <Head>
                <img src={Avatar} alt="photos"></img>
                <div>
                    <p>0xca41405fb...39ce</p>
                    <p>Balance: <span>163.92 BNB</span></p>
                </div>
                <img src={SettingIcon} alt="photos"></img>
            </Head>

            <p>You are qualified to summon a monster</p>

            <Menu>
                <li><a href="/">My monster</a></li>
                <li><a href="/">My egg</a></li>
                <li><a href="/">Disconnect</a></li>
            </Menu>
        </Wrapper>
    )
}
