import styled from "styled-components";
import BackIcon from '../assests/img/icon_back.png'
import Dragon from '../assests/img/dragon2.png'
import BucDung from '../assests/img/buc_dung.png'
import Avatar from '../assests/img/icon-ava.png'

const Wrapper = styled.div`
    min-height: 100vh;
    position: fixed;
    
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
    
`;

const WrapperImage = styled.div`
    background-image: radial-gradient(46.9% 46.9% at 49.88% 50.12%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.25) 0.01%, rgba(255, 255, 255, 0) 97.22%);
    height: 593px;
    width: 593px;
    position: relative;
    margin-top: -100px;
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
`

const Back = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
        font-weight: 600;
        font-size: 20px;
        text-transform: uppercase;
        margin-left: 9px;
    }
`

export default function MonsterImage() {
    return (
        <Wrapper>
            <Back>
                <img src={BackIcon} alt="photos"></img>
                <p>Back</p>
            </Back>

            <span>#18879</span>

            <p>DRAGON</p>

            <WrapperImage>
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
